import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const ChartCandleF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M18 2v3m0 14v3M6 5v3.5m0 8V20M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM5 8.5h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
    </IconWrapper>
  );
});

ChartCandleF1.displayName = 'ChartCandleF1';
export default ChartCandleF1;
