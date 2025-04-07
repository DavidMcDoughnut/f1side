import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CaratUp, CaratDn, NochangeF1 } from "@/components/icons" 
import { cn } from "@/lib/utils"

// --- Variant Definitions ---

const tickerPriceVariants = cva(
  "inline-flex font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-baseline",
        vertical: "flex-col",
      },
      alignment: {
        left: "justify-start",
        right: "justify-end",
      },
      size: {
        sm: "gap-1",    
        md: "gap-1",
        lg: "gap-1.5",
        xl: "gap-1.5",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      alignment: "left",
      size: "md",
    },
    compoundVariants: [],
  }
)

// --- Prop Interface ---

export interface TickerPriceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tickerPriceVariants> {
  /** The main price value to display. */
  priceValue: string;
  /** The change in price (e.g., +$1.23, -0.54%). */
  priceChange: string;
  /** Determines the icon and color for the price change. */
  direction: "up" | "down" | "flat";
  /** The time period for the price change (e.g., 1W, 24H). */
  timePeriod?: string;
  /** Whether to display the time period. Defaults to true if timePeriod is provided. */
  showTimePeriod?: boolean;
  /** Optional className for the main price value element. */
  priceValueClassName?: string;
  /** Optional className for the price change value element. */
  priceChangeClassName?: string;
  /** Optional className for the icon element. */
  iconClassName?: string;
  /** Optional className for the time period element. */
  timePeriodClassName?: string;
}

// --- Component Implementation ---

const TickerPrice = React.forwardRef<HTMLDivElement, TickerPriceProps>(
  (
    {
      className,
      orientation,
      alignment,
      size,
      priceValue,
      priceChange,
      direction,
      timePeriod,
      showTimePeriod = true,
      priceValueClassName,
      priceChangeClassName,
      iconClassName,
      timePeriodClassName,
      ...props
    },
    ref
  ) => {
    // Determine Icon and Color based on Direction
    const { IconComponent, changeColorClass } = React.useMemo(() => {
      switch (direction) {
        case "up":   return { IconComponent: CaratUp, changeColorClass: "text-pos" };
        case "down": return { IconComponent: CaratDn, changeColorClass: "text-neg" };
        case "flat": return { IconComponent: NochangeF1, changeColorClass: "text-tert" };
        default:     return { IconComponent: CaratUp, changeColorClass: "text-pos" };
      }
    }, [direction]);

    // Determine Sizings for text and icons
    const sizeClasses = React.useMemo(() => {
      switch (size) {
        case "sm": return { priceValue: "text-sm tracking-wide font-medium", changeRow: "text-xs", icon: "size-3" };
        case "md": return { priceValue: "text-base tracking-wide font-medium", changeRow: "text-sm", icon: "size-3" };
        case "lg": return { priceValue: "text-xl tracking-wide font-medium", changeRow: "text-base", icon: "size-3" };
        case "xl": return { priceValue: "text-3xl tracking-wide font-normal", changeRow: "text-lg", icon: "size-4" };
        default:   return { priceValue: "text-base tracking-wide font-medium", changeRow: "text-sm", icon: "size-3" };
      }
    }, [size]);

    const shouldShowTimePeriod = showTimePeriod && timePeriod;

    // Common Change Group element
    const ChangeGroup = (
      <span 
        data-ticker-price-part="change-group-content"
        className={cn(
          "inline-flex items-baseline",
          changeColorClass, 
          sizeClasses.changeRow,
          "gap-1"
          )}
      >
        <IconComponent
          data-ticker-price-part="icon"
          className={cn(
            "shrink-0 relative top-[0.125em]",
            sizeClasses.icon, 
            iconClassName
          )} 
        />
        <span
          data-ticker-price-part="priceChange"
          className={cn(priceChangeClassName)} 
        >
          {priceChange}
        </span>
        {shouldShowTimePeriod && (
          <span
            data-ticker-price-part="timePeriod"
            className={cn("text-quat", timePeriodClassName)} 
          >
            {timePeriod}
          </span>
        )}
      </span>
    );

    return (
      <div
        ref={ref}
        className={cn(tickerPriceVariants({ orientation, alignment, size, className }))}
        {...props}
      >
        <span
          data-ticker-price-part="priceValue"
          className={cn("text-prim", sizeClasses.priceValue, priceValueClassName)}
        >
          {priceValue}
        </span>
        {ChangeGroup}
      </div>
    );
  }
);

TickerPrice.displayName = "TickerPrice";

// --- Exports ---
export { TickerPrice, tickerPriceVariants }; 