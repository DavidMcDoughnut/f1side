import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

// Define types for each section's props
type ComboTabLeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

type ComboTabActionsProps = React.HTMLAttributes<HTMLDivElement>

type ComboTabTabsProps = React.ComponentProps<typeof TabsList>

// Define the main ComboTab props
interface ComboTabProps extends React.HTMLAttributes<HTMLDivElement> {
  withPadding?: boolean
  size?: "sm" | "base" | "lg" | "xl"
  variant?: "default" | "headerNav" | "headerNavFull" | "headerNavStatic" | "headerNavStaticFull"
}

// Create compound components
/**
 * Leading section of the ComboTab (title/button area)
 * 
 * Styling Guide:
 * 1. Default styling:
 *    - Inherits text size from parent ComboTab
 *    - Uses inline-flex for alignment
 *    - Has right margin (mr-6) for spacing from tabs
 * 
 * 2. When using with a button:
 *    - Use variant="ghost" to remove button background
 *    - Add className="px-0" to remove horizontal padding
 *    - Match button size prop with ComboTab size
 *    Example: <Button variant="ghost" size="sm" className="px-0">
 * 
 * 3. When using as text:
 *    - Can use any text element (h1, p, span, etc.)
 *    - Text will automatically align with tab text
 *    Example: <span className="font-medium text-prim">
 * 
 * 4. Custom styling:
 *    - Add className to override any default styles
 *    - Use text-{color} classes for different text colors
 *    - Use font-{weight} classes for different font weights
 *    - Use tracking-{size} classes for letter spacing
 */
const ComboTabLeading = React.forwardRef<HTMLDivElement, ComboTabLeadingProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "div"
    return (
      <Comp
        ref={ref}
        data-slot="leading"
        className={cn(
          "inline-flex items-center mr-2", // Base margin, might be overridden by variant
          className
        )}
        {...props}
      />
    )
  }
)
ComboTabLeading.displayName = "ComboTabLeading"

const ComboTabTabs = React.forwardRef<
  React.ElementRef<typeof TabsList>,
  ComboTabTabsProps
>(({ className, ...props }, ref) => (
  <TabsList
    ref={ref}
    className={cn(
      "border-none flex-1", // flex-1 pushes Actions to the right when Tabs are present
      className
    )}
    {...props}
  />
))
ComboTabTabs.displayName = "ComboTabTabs"

const ComboTabActions = React.forwardRef<HTMLDivElement, ComboTabActionsProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="actions"
      className={cn(
        "inline-flex items-center gap-3 ml-6", // Base margin, might be overridden by variant
        className
      )}
      {...props}
    />
  )
)
ComboTabActions.displayName = "ComboTabActions"

// Create the main ComboTab component
const ComboTab = React.forwardRef<HTMLDivElement, ComboTabProps>(
  ({ className, children, withPadding = false, size = "base", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "text-sm",
      base: "text-base",
      lg: "text-xl",
      xl: "text-3xl"
    }

    // Define styles for common elements within variants - applied to OUTER div
    const headerNavLeadingButtonStyles = "[&_[data-slot='leading']]:-ml-3 [&_[data-slot='leading']]:font-medium [&_[data-slot='leading']]:tracking-wider [&_[data-slot='leading']]:text-prim";
    const headerNavLeadingStaticStyles = "[&_[data-slot='leading']]:font-medium [&_[data-slot='leading']]:tracking-wider [&_[data-slot='leading']]:text-prim";
    const headerNavActionsStyles = "[&_[data-slot='actions']]:ml-auto [&_[data-slot='actions']_button.icon]:h-7 [&_[data-slot='actions']_button.icon]:w-7";
    const headerNavActionsMarginRight = "[&_[data-slot='actions']]:-mr-3"; // Specific margin adjustment
    const headerNavStaticLeadingMargin = "[&_[data-slot='leading']]:mr-4"; // Spacing for static leading

    // Variant styles applied to the OUTER div (height, data-slot targeting)
    const variantOuterStyles = {
      default: "", // Default has no fixed height or special slot styles
      headerNav: cn("h-12", headerNavLeadingButtonStyles, headerNavActionsStyles, headerNavActionsMarginRight),
      headerNavFull: cn("h-12", headerNavLeadingButtonStyles, headerNavActionsStyles, headerNavActionsMarginRight),
      headerNavStatic: cn("h-12", headerNavStaticLeadingMargin, headerNavLeadingStaticStyles, headerNavActionsStyles, headerNavActionsMarginRight),
      headerNavStaticFull: cn("h-12", headerNavStaticLeadingMargin, headerNavLeadingStaticStyles, headerNavActionsStyles, headerNavActionsMarginRight),
    }

    // Variant styles applied to the INNER div (padding)
    const variantInnerPadding = {
      default: withPadding ? "px-6" : "",
      headerNav: "px-0",
      headerNavFull: "px-6", 
      headerNavStatic: "px-6",
      headerNavStaticFull: "px-0", 
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-end w-full border-b border-strk-weakmid", // Use items-end to push inner wrapper down
          sizeClasses[size], // Applies font size context
          variantOuterStyles[variant], // Apply outer styles (height, slot targets)
          className
        )}
        {...props}
      >
        {/* Inner wrapper for content alignment and padding */}
        <div className={cn("flex items-center w-full", variantInnerPadding[variant])}>
          {children}
        </div>
      </div>
    )
  }
)
ComboTab.displayName = "ComboTab"

// Add compound components to ComboTab
const ComboTabRoot = Object.assign(ComboTab, {
  Leading: ComboTabLeading,
  Tabs: ComboTabTabs,
  Actions: ComboTabActions,
})

export {
  ComboTabRoot as ComboTab,
  type ComboTabProps,
  type ComboTabLeadingProps,
  type ComboTabTabsProps,
  type ComboTabActionsProps,
}

// Re-export the base tab components for convenience
export { Tabs, TabsTrigger, TabsContent } 