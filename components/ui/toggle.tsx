"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center rounded-md text-base font-normal text-quat whitespace-nowrap",
    
    // Hover state
    "hover:bg-ui-base-weak hover:text-prim hover:cursor-pointer",
    
    // Disabled state
    "disabled:pointer-events-none disabled:opacity-50",
    
    // Active/On state
    "data-[state=on]:bg-ui-base-weak data-[state=on]:text-brand",
    
    // SVG/Icon styles
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    
    // Focus styles
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
    
    // Transitions
    "transition-[color,background-color,box-shadow] duration-150",
    
    // Invalid state
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-strk-strongmid bg-transparent shadow-xs hover:bg-ui-base-weakmid hover:text-prim hover:cursor-pointer",
        positive: 
          "text-quat hover:bg-ui-base-weak hover:text-prim data-[state=on]:bg-pos-quat data-[state=on]:text-pos",
        negative:
          "text-quat hover:bg-ui-neg-weak hover:text-neg data-[state=on]:bg-neg-quat data-[state=on]:text-neg",
      },
      size: {
        xs: "h-5 px-1 min-w-8 text-sm",
        sm: "h-6 px-1.5 min-w-9 text-sm",
        default: "h-7 px-2 min-w-10",
        lg: "h-8 px-2.5 min-w-11 text-lg",
        xl: "h-10 px-3 min-w-12 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
