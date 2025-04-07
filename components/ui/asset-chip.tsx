import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CaratUp, CaratDn } from "@/components/icons"
import { cn } from "@/lib/utils"

const assetChipVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: `
          bg-ui-base-weak border border-strk-weak text-scnd
          hover:bg-ui-base-weakmid hover:border-strk-strongmid
        `,
        ghost: `
          bg-ui-base-weak text-scnd
          hover:bg-ui-base-weakmid
        `,
        pos: `
          bg-ui-pos-weak text-pos
          hover:bg-ui-pos-weakmid
        `,
        "pos-ghost": `
          text-pos
          hover:bg-ui-pos-weakmid
        `,
        neg: `
          bg-ui-neg-weak text-neg
          hover:bg-ui-neg-weakmid
        `,
        "neg-ghost": `
          text-neg
          hover:bg-ui-neg-weakmid
        `,
        warn: `
          bg-ui-warn-weak text-warn
          hover:bg-ui-warn-weakmid
        `,
        "warn-ghost": `
          text-warn
          hover:bg-ui-warn-weakmid
        `,
        brand: `
          bg-ui-brand-weak text-brand
          hover:bg-ui-brand-weakmid
        `,
        "brand-ghost": `
          text-brand
          hover:bg-ui-brand-weakmid
        `,
      },
      size: {
        sm: "h-5 text-sm px-2 [&>svg]:size-4 gap-1",
        default: "h-6 text-base px-2.5 [&>svg]:size-3 gap-1",
        lg: "h-7 text-base px-3 [&>svg]:size-3 gap-1",
      },
      direction: {
        up: "",
        down: "",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  }
)

export interface AssetChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof assetChipVariants> {
  symbol?: string
  value: string
  symbolClassName?: string
  valueClassName?: string
  iconClassName?: string
}

function AssetChip({
  className,
  variant,
  size,
  direction,
  symbol,
  value,
  symbolClassName,
  valueClassName,
  iconClassName,
  ...props
}: AssetChipProps) {
  // Determine if this is a ghost variant
  const isGhostVariant = variant?.includes('ghost') || false

  // Get the appropriate text color class based on variant
  const getSymbolColorClass = () => {
    if (!isGhostVariant) return 'text-prim'
    switch (variant) {
      case 'ghost': return 'text-scnd'
      case 'pos-ghost': return 'text-pos'
      case 'neg-ghost': return 'text-neg'
      case 'warn-ghost': return 'text-warn'
      case 'brand-ghost': return 'text-brand'
      default: return 'text-prim'
    }
  }

  return (
    <div className={cn(assetChipVariants({ variant, size, direction, className }))} {...props}>
      {symbol && (
        <span 
          data-asset-chip-part="symbol" 
          className={cn("font-medium tracking-widest mr-1", getSymbolColorClass(), symbolClassName)}
        >
          {symbol}
        </span>
      )}
      {direction === "up" && (
        <CaratUp 
          data-asset-chip-part="icon"
          className={cn("shrink-0", iconClassName)} 
        />
      )}
      {direction === "down" && (
        <CaratDn 
          data-asset-chip-part="icon"
          className={cn("shrink-0", iconClassName)} 
        />
      )}
      <span 
        data-asset-chip-part="value" 
        className={cn("font-normal", valueClassName)}
      >
        {value}
      </span>
    </div>
  )
}

export { AssetChip, assetChipVariants } 