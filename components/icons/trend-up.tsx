import * as React from 'react'
import { IconWrapper, IconProps } from './icon-wrapper'

export const TrendUpIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      {/* Replace this path with your actual SVG path data */}

      <path d="M22 10.5714L13.3636 19.619L8.81818 14.8571L2 22M22 2L13.3636 11.0476L8.81818 6.28571L2 13.4286" />


    </IconWrapper>
  )
})

TrendUpIcon.displayName = 'TrendUpIcon' 