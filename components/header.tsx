'use client'

import { BellIcon, LayoutGridIcon, LayoutIcon, Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchInput } from "@/components/ui/search-input"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
  variant?: "default" | "clean" | "centered"
  centerContent?: React.ReactNode
  hideBranding?: boolean
}

export function Header({ className, variant = "default", centerContent, hideBranding = false }: HeaderProps) {
  if (variant === "centered") {
    return (
      <header className={cn("w-full border-b border-strk-weakalpha relative", className)}>
        <div className="flex h-20 items-center px-0 sm:px-0 lg:px-0">
          {/* Main Content */}
          <div className="flex-1">
            {/* Render centerContent here */}
            {centerContent}
          </div>
          
          {/* Fixed Right Side */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={cn("w-full border-b border-strk-weakalpha bg-nav", className)}>
      <div className="grid h-14 grid-cols-12 items-center px-4 sm:px-6 lg:px-4">
        {/* Left Section - 2 columns - Now includes default branding */}
        <div className="col-span-2 flex items-center justify-start">
          {/* Default branding, conditionally rendered */} 
          {!hideBranding && (
            <div data-slot="header-branding" className="flex items-center gap-4 h-full">
              <Image src="/riskarb.svg" alt="RiskArb Logo" width={28} height={28} />
              <div className="hidden lg:flex items-center text-base font-normal text-prim tracking-xwide">
                FIN<span className="text-pos">TANGO</span>
              </div>
              <SearchInput className="w-xl ml-4" placeholder="Search..." />
            </div>
            
          )}
        </div>

        {/* Center Section - 7 columns */}
        <div className="col-span-7 flex justify-center">
          <div className="max-w-7xl w-full px-3">
            {centerContent}
          </div>
        </div>

        {/* Right Side Actions - 3 columns */}
        <div className="col-span-3 flex items-center justify-end gap-x-4">

          <ThemeToggle />

          {variant === "default" && (
            <>
              <Button
                isIcon
                variant="ghost"
                size="default"
                className="relative rounded-md size-8"
                aria-label="Notifications"
              >
                <BellIcon className="size-5" />
                <span className="absolute right-1 top-0 size-2 rounded-full bg-ui-neg-full ring-4 ring-nav" />
              </Button>

            {/*
              <Button
                isIcon
                variant="ghost"
                size="default"
                className="rounded-md size-8"
              >
                <Menu className="size-4" />
              </Button>

              
              <Button variant="default" size="sm">
                <LayoutGridIcon className="size-4" />
                <span>Add Widget</span>
              </Button>

              <Button variant="default" size="sm">
                <LayoutIcon className="size-4" />
                <span>Layout</span>
              </Button>
              */}
            </>
          )}

          <Avatar className="rounded-full size-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/12264519?v=4" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
} 