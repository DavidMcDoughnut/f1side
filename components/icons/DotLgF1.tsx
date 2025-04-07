import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const DotLgF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
});

DotLgF1.displayName = 'DotLgF1';
export default DotLgF1;
