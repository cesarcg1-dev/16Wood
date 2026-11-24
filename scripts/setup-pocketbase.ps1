# Crea las colecciones previstas en Docs/ROADMAP.md (Etapa 03).
# Las credenciales se piden al ejecutarse: no se guardan en este archivo ni en el repo.

$ErrorActionPreference = 'Stop'

$base = if ($env:PUBLIC_POCKETBASE_URL) { $env:PUBLIC_POCKETBASE_URL } else { 'http://127.0.0.1:8090' }

Write-Host "PocketBase: $base"
$identity = Read-Host 'Correo del superusuario'
$secret = Read-Host 'Contraseña del superusuario' -AsSecureString
$password = [System.Net.NetworkCredential]::new('', $secret).Password

try {
    $authBody = @{ identity = $identity; password = $password } | ConvertTo-Json -Compress
    $auth = Invoke-RestMethod -Method Post -Uri "$base/api/collections/_superusers/auth-with-password" -ContentType 'application/json' -Body $authBody
} catch {
    Write-Error 'No se pudo autenticar. Revisa el correo y la contraseña.'
    exit 1
} finally {
    $password = $null
    $authBody = $null
}

$headers = @{ Authorization = $auth.token }

function New-Field {
    param(
        [string]$Name,
        [string]$Type,
        [bool]$Required = $false
    )

    return @{ name = $Name; type = $Type; required = $Required }
}

$collections = @(
    @{
        name = 'productos'
        type = 'base'
        listRule = ''
        viewRule = ''
        createRule = $null
        updateRule = $null
        deleteRule = $null
        fields = @(
            (New-Field 'nombre' 'text' $true)
            (New-Field 'categoria' 'text')
            (New-Field 'descripcion' 'editor')
            (New-Field 'material' 'text')
            (New-Field 'precio' 'number')
            (New-Field 'plazo_entrega' 'text')
            (New-Field 'imagen' 'file')
            (New-Field 'destacado' 'bool')
        )
    },
    @{
        name = 'proyectos'
        type = 'base'
        listRule = ''
        viewRule = ''
        createRule = $null
        updateRule = $null
        deleteRule = $null
        fields = @(
            (New-Field 'titulo' 'text' $true)
            (New-Field 'descripcion' 'editor')
            (New-Field 'categoria' 'text')
            (New-Field 'imagen' 'file')
            (New-Field 'fecha' 'date')
        )
    },
    @{
        name = 'solicitudes'
        type = 'base'
        listRule = $null
        viewRule = $null
        createRule = ''
        updateRule = $null
        deleteRule = $null
        fields = @(
            (New-Field 'nombre' 'text' $true)
            (New-Field 'correo' 'email' $true)
            (New-Field 'telefono' 'text')
            (New-Field 'mensaje' 'editor' $true)
            (New-Field 'servicio' 'text')
            (New-Field 'estado' 'text')
        )
    }
)

$failed = $false

foreach ($collection in $collections) {
    $name = $collection.name

    try {
        Invoke-RestMethod -Method Get -Uri "$base/api/collections/$name" -Headers $headers -ErrorAction Stop | Out-Null
        Write-Host "Omitido (ya existe): $name"
        continue
    } catch {
        # No existe: se crea en el siguiente paso.
    }

    try {
        $json = $collection | ConvertTo-Json -Depth 10 -Compress
        $created = Invoke-RestMethod -Method Post -Uri "$base/api/collections" -Headers $headers -ContentType 'application/json' -Body $json
        Write-Host "Creado: $name ($($created.id))"
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
        Write-Host "Error al crear $name (HTTP $code): $($_.ErrorDetails.Message)"
        $failed = $true
    }
}

if ($failed) { exit 1 }

Write-Host 'Listo. Colecciones verificadas con el token de superusuario.'
