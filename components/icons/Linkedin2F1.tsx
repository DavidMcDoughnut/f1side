import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Linkedin2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M7 17v-7M11 17v-3.25m0 0V10m0 3.75c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" />
    </IconWrapper>
  );
});

Linkedin2F1.displayName = 'Linkedin2F1';
export default Linkedin2F1;
