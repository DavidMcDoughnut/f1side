import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Define variant types
type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  size?: "sm" | "base" | "lg" | "xl"
  variant?: "simple" | "floating"
  surface?: "page" | "nav" | "card"
}

type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  size?: "sm" | "base" | "lg" | "xl"
}

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, size = "base", variant = "floating", surface = "card", ...props }, ref) => {
  const sizeClasses = {
    sm: "gap-3",
    base: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  }

  return (
    <TabsPrimitive.List
      ref={ref}
      data-variant={variant}
      data-surface={surface}
      className={cn(
        "group inline-flex w-full border-b border-strk-weakalpha",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, size = "base", ...props }, ref) => {
  const sizeClasses = {
    sm: "text-sm font-normal tracking-wide",
    base: "text-base font-normal tracking-wide",
    lg: "text-xl font-normal tracking-wider",
    xl: "text-3xl font-light tracking-wide"
  }

  return (
    <TabsPrimitive.Trigger
    
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-0 py-3 font-medium text-tert disabled:pointer-events-none disabled:opacity-50 relative",
        
        // Base active state
        "data-[state=active]:text-prim",

        // Hover styles
        "hover:text-prim hover:cursor-pointer transition-colors duration-200",
        
        // Focus styles
        "focus-visible:outline-none",

        // Simple variant indicator style
        "[.group[data-variant=simple]_&[data-state=active]]:after:absolute [.group[data-variant=simple]_&[data-state=active]]:after:left-0 [.group[data-variant=simple]_&[data-state=active]]:after:bottom-[-1px] [.group[data-variant=simple]_&[data-state=active]]:after:h-[2px] [.group[data-variant=simple]_&[data-state=active]]:after:w-full [.group[data-variant=simple]_&[data-state=active]]:after:bg-brand",
        
        // Default floating indicator style
        "data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1.5px] data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-brand data-[state=active]:after:rounded-full",
        "data-[state=active]:before:absolute data-[state=active]:before:left-[-8px] data-[state=active]:before:right-[-8px] data-[state=active]:before:bottom-[-1.5px] data-[state=active]:before:h-[2px] data-[state=active]:before:rounded-full",
        
        // Surface-specific underlay colors
        "[.group[data-surface=page]_&[data-state=active]]:before:bg-page",
        "[.group[data-surface=nav]_&[data-state=active]]:before:bg-nav",
        "[.group[data-surface=card]_&[data-state=active]]:before:bg-card",

        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent } 