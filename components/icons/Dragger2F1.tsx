import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Dragger2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M9 8V6m6 0v2M9 13v-2m6 0v2M9 18v-2m6 0v2" />
    </IconWrapper>
  );
});

Dragger2F1.displayName = 'Dragger2F1';
export default Dragger2F1;
