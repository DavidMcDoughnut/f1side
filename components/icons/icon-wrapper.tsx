import * as React from 'react'
import { cn } from '@/lib/utils'

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height' | 'size'> {
  strokeWidth?: number
  absoluteStrokeWidth?: boolean
}

export const IconWrapper = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, children, strokeWidth = 1.5, absoluteStrokeWidth, ...props }, ref) => {
    const effectiveStrokeWidth = strokeWidth;

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={effectiveStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('', className)}
        {...props}
      >
        {children}
      </svg>
    )
  }
)

IconWrapper.displayName = 'IconWrapper' 