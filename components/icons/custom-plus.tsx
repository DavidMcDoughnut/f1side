import * as React from 'react'
import { IconWrapper, IconProps } from './icon-wrapper'

export const CustomPlusIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      {/* We extracted just this path from the original SVG file */}
      <path d="M12 5v14m-7-7h14" />
    </IconWrapper>
  )
})

CustomPlusIcon.displayName = 'CustomPlusIcon' 