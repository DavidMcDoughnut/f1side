import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Tiktok2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M8.5 12a4.5 4.5 0 1 0 4.5 4.5V3c.5 1.5 2.4 4.5 6 4.5" />
    </IconWrapper>
  );
});

Tiktok2F1.displayName = 'Tiktok2F1';
export default Tiktok2F1;
