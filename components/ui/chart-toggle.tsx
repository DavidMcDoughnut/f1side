"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Maximize2, MoreVertical } from "lucide-react"
import { ChartLineF1 } from "@/components/icons"
import { cn } from "@/lib/utils"

interface ChartToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "positive" | "negative" | "default"
  size?: "xs" | "sm" | "default" | "lg" | "xl"
  defaultTimeRange?: string
  onTimeRangeChange?: (value: string) => void
  onChartTypeChange?: () => void
  onFullscreenClick?: () => void
  onMenuClick?: () => void
}

export function ChartToggle({
  variant = "positive",
  size = "default",
  defaultTimeRange = "1D",
  onTimeRangeChange,
  onChartTypeChange,
  onFullscreenClick,
  onMenuClick,
  className,
  ...props
}: ChartToggleProps) {
  // Map size variants to button and icon sizes
  const sizeMap = {
    xs: {
      icon: "h-3.5 w-3.5",
      separator: "h-4",
      buttonSize: "sm" as const,
    },
    sm: {
      icon: "h-4 w-4",
      separator: "h-4",
      buttonSize: "sm" as const,
    },
    default: {
      icon: "h-5 w-5",
      separator: "h-5",
      buttonSize: "default" as const,
    },
    lg: {
      icon: "h-4.5 w-4.5",
      separator: "h-5",
      buttonSize: "lg" as const,
    },
    xl: {
      icon: "h-5 w-5",
      separator: "h-6",
      buttonSize: "xl" as const,
    },
  }

  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <ToggleGroup 
        type="single" 
        size={size}
        variant={variant}
        defaultValue={defaultTimeRange}
        onValueChange={onTimeRangeChange}
      >
        <ToggleGroupItem value="1D">1D</ToggleGroupItem>
        <ToggleGroupItem value="1W">1W</ToggleGroupItem>
        <ToggleGroupItem value="1M">1M</ToggleGroupItem>
        <ToggleGroupItem value="3M">3M</ToggleGroupItem>
        <ToggleGroupItem value="YTD">YTD</ToggleGroupItem>
        <ToggleGroupItem value="1Y">1Y</ToggleGroupItem>
        <ToggleGroupItem value="5Y">5Y</ToggleGroupItem>
      </ToggleGroup>

      <div className={cn("flex items-center", sizeMap[size].separator)}>
        <Separator 
          orientation="vertical" 
          variant="weakalpha"
          className="mx-1 w-1 h-full" 
        />
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="headerbtn" 
          size={sizeMap[size].buttonSize}
          isIcon
          onClick={onChartTypeChange}
        >
          <ChartLineF1 className={sizeMap[size].icon} />
        </Button>
        <Button 
          variant="headerbtn" 
          size={sizeMap[size].buttonSize}
          isIcon
          onClick={onFullscreenClick}
        >
          <Maximize2 className={sizeMap[size].icon} />
        </Button>
        <Button 
          variant="headerbtn" 
          size={sizeMap[size].buttonSize}
          isIcon
          onClick={onMenuClick}
        >
          <MoreVertical className={sizeMap[size].icon} />
        </Button>
      </div>
    </div>
  )
} 