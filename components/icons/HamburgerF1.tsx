import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const HamburgerF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3 12h18m-8-8h8M3 20h8" />
    </IconWrapper>
  );
});

HamburgerF1.displayName = 'HamburgerF1';
export default HamburgerF1;
