import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CaratUp, CaratDn, NochangeF1 } from "@/components/icons"
import { cn } from "@/lib/utils"

const priceChangeVariants = cva(
  "inline-flex items-center font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: { // Added variant for potential future use, matching AssetChip structure
        default: "", 
      },
      size: {
        xs: "h-4 text-xs px-1.5 [&>svg]:size-3 gap-0.5",
        sm: "h-5 text-sm px-2 [&>svg]:size-3 gap-1",
        md: "h-6 text-base px-2.5 [&>svg]:size-3 gap-1",
        lg: "h-7 text-lg px-3 [&>svg]:size-4 gap-1",
      },
      direction: {
        up: "text-pos",
        down: "text-neg",
        flat: "text-scnd",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      direction: "up",
    },
  }
)

export interface PriceChangeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof priceChangeVariants> {
  price: string
  timePeriod?: string
  showTimePeriod?: boolean
  priceClassName?: string
  timePeriodClassName?: string
  iconClassName?: string
}

function PriceChange({
  className,
  variant,
  size,
  direction,
  price,
  timePeriod,
  showTimePeriod = true, // Default to showing time period if provided
  priceClassName,
  timePeriodClassName,
  iconClassName,
  ...props
}: PriceChangeProps) {

  const IconComponent = React.useMemo(() => {
    switch (direction) {
      case "up": return CaratUp;
      case "down": return CaratDn;
      case "flat": return NochangeF1;
      default: return CaratUp; // Default case, should ideally not happen
    }
  }, [direction]);

  return (
    <div className={cn(priceChangeVariants({ variant, size, direction, className }))} {...props}>
      <IconComponent 
        data-price-change-part="icon"
        className={cn("shrink-0", iconClassName)} 
      />
      <span 
        data-price-change-part="price" 
        className={cn(priceClassName)}
      >
        {price}
      </span>
      {showTimePeriod && timePeriod && (
        <span 
          data-price-change-part="timePeriod" 
          // Use text-quat for less emphasis on time period, can be overridden
          className={cn("text-quat", timePeriodClassName)} 
        >
          {timePeriod}
        </span>
      )}
    </div>
  )
}

export { PriceChange, priceChangeVariants } 