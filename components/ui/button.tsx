import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-base font-medium transition-colors duration-200 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:`
          bg-ui-base-weak border border-strk-weak text-scnd
          hover:bg-ui-base-weakmid hover:border-strk-strongmid hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        outline:`
          text-scnd border border-strk-weakmid 
          hover:bg-ui-base-weakmid hover:border-strk-strongmid hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        filled:`
          bg-ui-base-full border border-strk-weak text-scnd
          hover:bg-ui-soft-full hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        strong:`
          bg-ui-strong-weak border border-ui-strong-weak text-prim
          hover:bg-ui-strong-full hover:border-ui-strong-full hover:text-prim
          active:bg-ui-strong-contrast active:border-ui-strong-contrast active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-strong-weak disabled:border-strk-weak disabled:text-disb
        `,
        ghost:`
          text-tert
          hover:bg-ui-base-weakmid hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        dash:`
          text-scnd border border-dashed border-strk-strongmid 
          hover:bg-ui-base-weakmid hover:border-strk-strong hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        pos:`
          bg-ui-pos-weak border border-ui-pos-strongmid text-prim
          hover:bg-ui-pos-weakmid hover:border-ui-pos-full hover:text-prim
          active:bg-ui-pos-full active:border-ui-pos-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-pos-weak disabled:border-weak disabled:text-disb
        `,
        neg:`
          bg-ui-neg-weak border border-ui-neg-strongmid text-prim
          hover:bg-ui-neg-weakmid hover:border-ui-neg-full hover:text-prim
          active:bg-ui-neg-full active:border-ui-neg-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-neg-weak disabled:border-weak disabled:text-disb
        `,
        warn:`
          bg-ui-warn-weak border border-ui-warn-strongmid text-warn
          hover:bg-ui-warn-weakmid hover:border-ui-warn-full hover:text-prim
          active:bg-ui-warn-full active:border-ui-warn-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-warn-weak disabled:border-weak disabled:text-disb
        `,
        brand:`
          bg-ui-brand-weak border border-ui-brand-strongmid text-prim
          hover:bg-ui-brand-weakmid hover:border-ui-brand-full hover:text-prim
          active:bg-ui-brand-full active:border-ui-brand-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-brand-weak disabled:border-weak disabled:text-disb
        `,
        posfill:`
          bg-ui-pos-weak text-pos
          hover:bg-ui-pos-strongmid
          active:bg-ui-pos-full active:border-ui-pos-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-pos-weak disabled:border-weak disabled:text-disb
        `,
        negfill:`
          bg-ui-neg-weak text-neg
          hover:bg-ui-neg-strongmid
          active:bg-ui-neg-full active:border-ui-neg-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-neg-weak disabled:border-weak disabled:text-disb
        `,
        warnfill:`
          bg-ui-warn-weak text-warn
          hover:bg-ui-warn-strongmid
          active:bg-ui-warn-full active:border-ui-warn-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-warn-weak disabled:border-weak disabled:text-disb
        `,
        brandfill:`
          bg-ui-brand-weak text-brand
          hover:bg-ui-brand-weakmid
          active:bg-ui-brand-full active:border-ui-brand-full active:text-invr
          focus:border-stroke-pos
          disabled:bg-ui-brand-weak disabled:border-weak disabled:text-disb
        `,
        headerbtn: `
          text-quat
          hover:bg-ui-base-weakmid hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        headertitle: `
          text-prim
          hover:bg-ui-base-weakmid hover:text-prim
          active:bg-ui-base-strong data-active:border-strk-strong
          focus:border-stroke-pos
          disabled:bg-ui-base-weak disabled:border-strk-weak disabled:text-disb
        `,
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-6 px-3 gap-2 [&>svg]:size-4",
        default: "h-7 px-3 py-2 gap-2 [&>svg]:size-4",
        lg: "h-8 px-4 text-lg gap-2 [&>svg]:size-5",
        xl: "h-10 px-4 text-xl gap-3 [&>svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean
  isIcon?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  isIcon = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-icon={isIcon}
      className={cn(
        buttonVariants({ variant, size, className }),
        isIcon && "aspect-square p-0 gap-0",
        isIcon && (!size || size === "sm") && "size-6",
        isIcon && (!size || size === "default") && "size-7",
        isIcon && size === "lg" && "size-8",
        isIcon && size === "xl" && "size-10"
      )}
      {...props}
    />
  )
}

export { buttonVariants }
