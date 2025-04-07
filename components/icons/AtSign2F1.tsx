import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const AtSign2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M17.5 19.125A9 9 0 1 1 21 12c0 5.5-6 5.5-6 2V8" />
      <path d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12m6 0v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12" />
    </IconWrapper>
  );
});

AtSign2F1.displayName = 'AtSign2F1';
export default AtSign2F1;
