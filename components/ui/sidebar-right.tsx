"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { MessageCircle, Bell, PieChart, Calendar, Globe } from "lucide-react"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

// Context for managing sidebar state
const SidebarRightContext = React.createContext<{
  open: boolean
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void
  width: number
  mobileWidth: number
}>({
  open: false, // Default state is now collapsed
  setOpen: () => {},
  width: 320,
  mobileWidth: 280,
})

// Constants
const SIDEBAR_RIGHT_COOKIE_NAME = "sidebar-right-open"
const SIDEBAR_RIGHT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

interface SidebarRightProviderProps {
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  width?: number
  mobileWidth?: number
}

export function SidebarRightProvider({
  children,
  defaultOpen = false, // Default state is now collapsed
  open: openProp,
  onOpenChange: setOpenProp,
  width = 320,
  mobileWidth = 280,
}: SidebarRightProviderProps) {
  const [open, _setOpen] = React.useState(() => {
    if (typeof openProp !== "undefined") return openProp
    if (typeof window === "undefined") return defaultOpen

    const stored = window.document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${SIDEBAR_RIGHT_COOKIE_NAME}=`))
      ?.split("=")[1]
    return stored ? stored === "true" : defaultOpen
  })

  const setOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // Set cookie to persist state
      document.cookie = `${SIDEBAR_RIGHT_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_RIGHT_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  React.useEffect(() => {
    if (typeof openProp !== "undefined") {
      _setOpen(openProp)
    }
  }, [openProp])

  return (
    <SidebarRightContext.Provider value={{ open, setOpen, width, mobileWidth }}>
      {children}
    </SidebarRightContext.Provider>
  )
}

// Hook for accessing sidebar context
export function useSidebarRight() {
  const context = React.useContext(SidebarRightContext)
  if (!context) {
    throw new Error("useSidebarRight must be used within a SidebarRightProvider")
  }
  return context
}

// Navigation items type
interface NavItem {
  icon: React.ElementType
  label: string
}

// Navigation items configuration
const navItems: NavItem[] = [
  { icon: MessageCircle, label: "Chat" },
  { icon: Bell, label: "Alerts" },
  { icon: PieChart, label: "Assets" },
  { icon: Calendar, label: "Calendar" },
  { icon: Globe, label: "News" },
]

// Navigation component using SidebarMenu structure
export function SidebarRightNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  const { open } = useSidebarRight()
  const [activeItem, setActiveItem] = React.useState<string>("Chat") // State for active item
  
  return (
    <SidebarMenu className={cn("p-2", className)} {...props}>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton
            className={cn(!open && "justify-center")}
            aria-label={item.label}
            isActive={activeItem === item.label} // Set isActive based on state
            onClick={() => setActiveItem(item.label)} // Update state on click
          >
            <item.icon className="size-5 shrink-0" />
            {/* Conditionally render label based on 'open' state */}
            <span className={cn("text-sm", !open && "sr-only")}>{item.label}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

// Sidebar variants and core styles
// Core styles:
// - fixed positioning on right side (fixed top-0 right-0)
// - full height (h-screen)
// - top padding (pt-4) to account for header/nav
// - left border (border-l border-strk-weakalpha)
// - background color (bg-card)
const sidebarRightVariants = cva(
  "fixed top-14 right-0 h-screen pt-4 border-l border-strk-weakalpha bg-card",
  {
    variants: {
      // Background variants
      variant: {
        default: "bg-nav", 
        muted: "bg-page",  
      },
      // Width behavior variants
      collapsible: {
        default: "w-[var(--sidebar-width)]", // Fixed width when not collapsible
        icon: "w-[var(--sidebar-width)] data-[collapsed=true]:w-[var(--sidebar-icon-width)]", // Width transitions based on state
      },
    },
    defaultVariants: {
      variant: "default",
      collapsible: "icon", // Default to icon collapsible behavior
    },
  }
)

interface SidebarRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarRightVariants> {}

export function SidebarRight({
  className,
  variant,
  collapsible,
  children, // Accept children prop
  ...props
}: SidebarRightProps & { children?: React.ReactNode }) { // Ensure children prop is typed
  const { open, width, mobileWidth } = useSidebarRight()
  const isMobile = useIsMobile()

  return (
    <aside
      data-collapsed={!open}
      style={{
        // Dynamic width based on device and state
        "--sidebar-width": `${isMobile ? mobileWidth : width}px`,
        "--sidebar-icon-width": "4rem", // Standard icon width
      } as React.CSSProperties}
      className={cn(sidebarRightVariants({ variant, collapsible }), className)}
      {...props}
    >
      <SidebarRightNav />
      {/* Render passed children below the navigation */}
      {children} 
    </aside>
  )
}

// Header component
// Styles:
// - Fixed height (h-[60px])
// - Flex layout with centered items (flex items-center)
// - Horizontal padding (px-4)
// - Bottom border (border-b)
export function SidebarRightHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex h-[60px] items-center px-4 border-b", className)}
      {...props}
    />
  )
}

// Content component
// Styles:
// - Flex column layout (flex flex-col)
// - Takes remaining space (flex-1)
// - Scrollable content (overflow-auto)
export function SidebarRightContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 overflow-auto",
        className
      )}
      {...props}
    />
  )
}

// Footer component
// Styles:
// - Fixed height (h-[52px])
// - Flex layout with centered items (flex items-center)
// - Horizontal padding (px-4)
// - Top border (border-t)
export function SidebarRightFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex h-[52px] items-center border-t px-4", className)}
      {...props}
    />
  )
}

// Trigger button component
// Styles:
// - Flex layout with centered content (inline-flex items-center justify-center)
// - Square dimensions (h-10 w-10)
// - Rounded corners (rounded-md)
// - Text styling (text-sm font-medium)
// - Focus and hover states
export function SidebarRightTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useSidebarRight()

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10",
        className
      )}
      onClick={() => setOpen((prev: boolean) => !prev)}
      {...props}
    />
  )
} 