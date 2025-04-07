import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Maximize3ChartF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M21 11V4a1 1 0 0 0-1-1h-7m-2 18H4a1 1 0 0 1-1-1v-7" />
    </IconWrapper>
  );
});

Maximize3ChartF1.displayName = 'Maximize3ChartF1';
export default Maximize3ChartF1;
