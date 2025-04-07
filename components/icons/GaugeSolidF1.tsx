import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const GaugeSolidF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2" fill="currentColor" stroke="none" />
      <path
        d="M2 16C2 10.477 6.477 6 12 6c2.25 0 4.328.744 6 2m3 4-9 4m0 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
    </IconWrapper>
  );
});

GaugeSolidF1.displayName = 'GaugeSolidF1';
export default GaugeSolidF1;
