import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: `
          bg-ui-base-weak border border-strk-weakmid text-scnd
          hover:bg-ui-base-weakmid hover:border-strk-strongmid
        `,
        outline: `
          border border-strk-weakmid text-scnd
          hover:bg-ui-base-weakmid hover:border-strk-strongmid
        `,
        filled: `
          bg-ui-base-full border border-strk-weak text-scnd
          hover:bg-ui-soft-full
        `,
        strong: `
          bg-ui-strong-weak border border-ui-strong-weak text-prim
          hover:bg-ui-strong-full hover:border-ui-strong-full
        `,
        pos: `
          bg-ui-pos-weak border border-pos-tert text-pos
          hover:bg-ui-pos-weakmid hover:border-pos
        `,
        neg: `
          bg-ui-neg-weak border border-neg-tert text-neg
          hover:bg-ui-neg-weakmid hover:border-neg
        `,
        warn: `
          bg-ui-warn-weak border border-warn-tert text-warn
          hover:bg-ui-warn-weakmid hover:border-warn
        `,
        brand: `
          bg-ui-brand-weak border border-brand-tert text-brand
          hover:bg-ui-brand-weakmid hover:border-brand
        `,
        tag: `
          bg-ui-base-weak border border-strk-weakmid text-scnd
          hover:bg-ui-base-weakmid hover:border-strk-strongmid hover:text-prim hover:cursor-pointer
          active:bg-ui-base-strong data-active:border-strk-strong
        `,
        tagPos: `
          bg-ui-base-weak border border-strk-weakmid text-pos
          hover:bg-ui-pos-weakmid hover:border-pos hover:text-pos hover:cursor-pointer
          active:bg-ui-pos-full active:border-pos active:text-invr
        `,
        tagNeg: `
          bg-ui-base-weak border border-strk-weakmid text-neg
          hover:bg-ui-neg-weakmid hover:border-neg hover:text-neg hover:cursor-pointer
          active:bg-ui-neg-full active:border-neg active:text-invr
        `,
        tagWarn: `
          bg-ui-base-weak border border-strk-weakmid text-warn
          hover:bg-ui-warn-weakmid hover:border-warn hover:text-warn hover:cursor-pointer
          active:bg-ui-warn-full active:border-warn active:text-invr
        `,
        tagBrand: `
          bg-ui-brand-weak border border-brand-scnd text-brand
          hover:bg-ui-brand-weakmid hover:border-brand hover:text-brand hover:cursor-pointer
          active:bg-ui-brand-full active:border-brand active:text-invr
        `,
      },
      size: {
        sm: "h-5 text-xs px-2 [&>svg]:size-3 gap-1",
        default: "h-6 text-sm px-2.5 [&>svg]:size-3.5 gap-1",
        lg: "h-7 text-base px-3 [&>svg]:size-4 gap-2.5",
      },
      shape: {
        default: "rounded-sm",
        pill: "rounded-full",
      },
      withDot: {
        true: "gap-1.5 [&>span:first-child]:size-2 [&>span:first-child]:rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
      withDot: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dotColor?: string
}

function Badge({
  className,
  variant,
  size,
  shape,
  withDot,
  dotColor,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, shape, withDot, className }))} {...props}>
      {withDot && <span className={cn("shrink-0", dotColor)} />}
      {children}
    </div>
  )
}

export { Badge, badgeVariants } 