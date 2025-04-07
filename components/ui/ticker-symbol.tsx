import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tickerSymbolVariants = cva(
  "inline-flex",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-baseline space-x-1",
        vertical: "flex-col",
      },
      size: {
        xl: "",
        lg: "",
        base: "",
        sm: "",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "base",
    },
  }
);

const symbolTickerVariants = cva("text-prim", {
  variants: {
    size: {
      xl: "text-3xl tracking-wider",
      lg: "text-xl tracking-wider",
      base: "text-base font-medium tracking-widest",
      sm: "text-sm font-medium tracking-widest",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

const symbolNameVariants = cva("text-tert", {
  variants: {
    size: {
      xl: "text-base tracking-wide",
      lg: "text-base tracking-wide",
      base: "text-sm tracking-wide",
      sm: "text-sm tracking-wide",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export interface TickerSymbolProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tickerSymbolVariants> {
  symbolTicker: string;
  symbolName: string;
}

const TickerSymbol = React.forwardRef<
  HTMLDivElement,
  TickerSymbolProps
>(({ className, orientation, size, symbolTicker, symbolName, ...props }, ref) => {
  return (
    <div
      className={cn(tickerSymbolVariants({ orientation, size, className }))}
      ref={ref}
      {...props}
    >
      <span className={cn(symbolTickerVariants({ size }))}>{symbolTicker}</span>
      <span className={cn(symbolNameVariants({ size }))}>{symbolName}</span>
    </div>
  );
});
TickerSymbol.displayName = "TickerSymbol";

export { TickerSymbol, tickerSymbolVariants, symbolTickerVariants, symbolNameVariants }; 