import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const ChartIconF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m22 2-3.5 7h-7L8 16m14 6H5a3 3 0 0 1-3-3V2" />
    </IconWrapper>
  );
});

ChartIconF1.displayName = 'ChartIconF1';
export default ChartIconF1;
