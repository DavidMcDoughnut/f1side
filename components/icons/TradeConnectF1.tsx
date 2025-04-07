import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const TradeConnectF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M15 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H8a2 2 0 0 0-2 2v3m0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconWrapper>
  );
});

TradeConnectF1.displayName = 'TradeConnectF1';
export default TradeConnectF1;
