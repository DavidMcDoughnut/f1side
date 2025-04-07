import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Card } from "@/components/ui/card"
import { TickerSymbol } from "@/components/ui/ticker-symbol"
import { PriceChange } from "@/components/ui/price-change"
import { cn } from "@/lib/utils"

const tickerCardVariants = cva(
  "flex items-start",
  {
    variants: {
      variant: {
        up: "",
        down: "",
        flat: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "flat",
      size: "default",
    },
  }
)

export interface TickerCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tickerCardVariants> {
  symbolTicker: string
  symbolName: string
  priceChange: string
  priceValue: string
  timePeriod?: string
  showTimePeriod?: boolean
  // Custom class names for styling different parts
  cardClassName?: string
  leftColumnClassName?: string
  rightColumnClassName?: string
  tickerSymbolClassName?: string
  priceChangeClassName?: string
}

const TickerCard = React.forwardRef<HTMLDivElement, TickerCardProps>(
  ({ 
    className,
    variant = "flat",
    size,
    symbolTicker,
    symbolName,
    priceChange,
    priceValue,
    timePeriod,
    showTimePeriod = true,
    // Custom class names
    cardClassName,
    leftColumnClassName,
    rightColumnClassName,
    tickerSymbolClassName,
    priceChangeClassName,
    ...props 
  }, ref) => {
    return (
      <Card
        variant="muted"
        className={cn("px-6 py-1 h-fit", cardClassName)}
        ref={ref}
        {...props}
      >
        <div className={cn(tickerCardVariants({ variant, size, className }), "px-0")}>
          {/* Left Column - Contains TickerSymbol and PriceChange */}
          <div className={cn("flex flex-col gap-0", leftColumnClassName)}>
            <TickerSymbol
              orientation="horizontal"
              size="base"
              symbolTicker={symbolTicker}
              symbolName={symbolName}
              className={tickerSymbolClassName}
            />
            <PriceChange
              size="sm"
              direction={variant}
              price={priceChange}
              timePeriod={timePeriod}
              showTimePeriod={showTimePeriod}
              className={priceChangeClassName}
            />
          </div>
          
          {/* Right Column - Empty for now but takes up half the space */}
          <div className={cn("w-1/2", rightColumnClassName)}>
            {/* Right column content will go here */}
          </div>
        </div>
      </Card>
    )
  }
)
TickerCard.displayName = "TickerCard"

export { TickerCard, tickerCardVariants } 