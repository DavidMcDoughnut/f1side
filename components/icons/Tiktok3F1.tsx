import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Tiktok3F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5" />
      <path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3" />
    </IconWrapper>
  );
});

Tiktok3F1.displayName = 'Tiktok3F1';
export default Tiktok3F1;
