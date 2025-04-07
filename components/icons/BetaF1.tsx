import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const BetaF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M10.286 8.857c2.367 0 4.285-1.648 4.285-3.857s-1.918-4-4.285-4S6 2.79 6 5v18m4.286-14.143H12c3.314 0 6 2.463 6 5.5s-2.686 5.5-6 5.5-6-2.462-6-5.5m4.286-5.5H10" />
    </IconWrapper>
  );
});

BetaF1.displayName = 'BetaF1';
export default BetaF1;
