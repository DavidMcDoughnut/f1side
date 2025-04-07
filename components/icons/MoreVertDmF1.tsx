import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const MoreVertDmF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  // Note: strokeWidth prop on IconWrapper defaults to 1.5, but original SVG used 2.
  // Pass strokeWidth={2} explicitly if the thicker line is desired.
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </IconWrapper>
  );
});

MoreVertDmF1.displayName = 'MoreVertDmF1';
export default MoreVertDmF1;
