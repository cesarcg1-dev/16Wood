import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "overflow-hidden rounded-md border border-line bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex items-center justify-between gap-3 px-4 py-3", className)}
      {...props}
    />
  );
}

export { Card, CardContent };
