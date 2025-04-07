import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "flex flex-col rounded-md border px-6 py-4",
  {
    variants: {
      variant: {
        static: `
          bg-card border-strk-weakalpha text-prim
          
        `,
        hover: `
          bg-card border-strk-weakalpha text-prim
          hover:border-strk-strongmid hover:shadow-xl transition-all duration-200 hover:cursor-pointer
        `,
        muted: `
          bg-nav border-strk-weakalpha text-prim
          
        `,
        cta: `
          bg-card border-strk-weakalpha text-prim
          hover:border-pos hover:shadow-xl transition-all duration-200 transition-all duration-200 hover:cursor-pointer
          
        `,
        page: `
          bg-page border-strk-weakalpha text-prim
          hover:border-strk-strongmid hover:shadow-xl transition-all duration-200 hover:cursor-pointer
        `,
        outline: `
        border-strk-weakalpha text-prim
        hover:border-strk-strongmid hover:shadow-xl transition-all duration-200 hover:cursor-pointer
      `,
        ghost: `
        border-page text-prim
        hover:border-strk-weakalpha hover:shadow-xl transition-all duration-200 hover:cursor-pointer
      `,
      }
    },
    defaultVariants: {
      variant: "static"
    }
  }
)

interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-medium text-base tracking-wide", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-tert text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("text-scnd", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
