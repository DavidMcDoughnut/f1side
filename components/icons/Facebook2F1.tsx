import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Facebook2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </IconWrapper>
  );
});

Facebook2F1.displayName = 'Facebook2F1';
export default Facebook2F1;
