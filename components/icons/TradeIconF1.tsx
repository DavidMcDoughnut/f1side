import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const TradeIconF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M2 7.833h20L17.833 2M22 16.167H2L6.167 22" />
    </IconWrapper>
  );
});

TradeIconF1.displayName = 'TradeIconF1';
export default TradeIconF1;
