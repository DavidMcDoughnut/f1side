import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const ChartLineF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m23 6-9.5 9.5-5-5L1 18" />
    </IconWrapper>
  );
});

ChartLineF1.displayName = 'ChartLineF1';
export default ChartLineF1;
