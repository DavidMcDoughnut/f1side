import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const ChartBaselineF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m22 7-2.438-3.048a2 2 0 0 0-3.124 0L14 7m-4 10-2.438 3.048a2 2 0 0 1-3.124 0L2 17m0-5h20" />
    </IconWrapper>
  );
});

ChartBaselineF1.displayName = 'ChartBaselineF1';
export default ChartBaselineF1;
