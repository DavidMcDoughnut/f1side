import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Facebook3F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5" />
      <path d="M11 21v-9c0-2.187.5-4 4-4M9 13h6" />
    </IconWrapper>
  );
});

Facebook3F1.displayName = 'Facebook3F1';
export default Facebook3F1;
