import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Broker2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m3 6 9-4 9 4M3 22h18M5.333 16v-3.75M9.778 16v-3.75M14.222 16v-3.75M18.667 16v-3.75" />
    </IconWrapper>
  );
});

Broker2F1.displayName = 'Broker2F1';
export default Broker2F1;
