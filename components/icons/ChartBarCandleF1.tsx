import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const ChartBarCandleF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M7 21v-3M7 5v5m10-7v4m0 12v-6M7 18h4m-4 0v-8m10-3h4m-4 0v6M7 10H3m14 3h-4" />
    </IconWrapper>
  );
});

ChartBarCandleF1.displayName = 'ChartBarCandleF1';
export default ChartBarCandleF1;
