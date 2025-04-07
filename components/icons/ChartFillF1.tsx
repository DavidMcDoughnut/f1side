import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const ChartFillF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m22 5-8.5 9.5-5-4L1 19" />
    </IconWrapper>
  );
});

ChartFillF1.displayName = 'ChartFillF1';
export default ChartFillF1;
