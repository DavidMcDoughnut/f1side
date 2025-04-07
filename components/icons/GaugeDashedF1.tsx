import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const GaugeDashedF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path
        strokeDasharray="3 3"
        d="M2 16C2 10.477 6.477 6 12 6c2.251 0 4.328.744 6 2"
      />
      <path
        d="m21 12-9 4"
      />
      <path
        d="M12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        fill="currentColor" stroke="none"
      />
    </IconWrapper>
  );
});

GaugeDashedF1.displayName = 'GaugeDashedF1';
export default GaugeDashedF1;
