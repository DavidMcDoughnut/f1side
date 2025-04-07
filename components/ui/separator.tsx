"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

const separatorVariants = {
  weak: "bg-strk-weak",
  weakmid: "bg-strk-weakmid",
  weakalpha: "bg-strk-weakalpha",
  strongalpha: "bg-strk-strongalpha",
  strongmid: "bg-strk-strongmid",
  strong: "bg-strk-strong"
}

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  variant?: keyof typeof separatorVariants
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "weak",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        separatorVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Separator }
