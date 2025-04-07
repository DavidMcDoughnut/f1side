import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Compass2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M10.586 10.586 16.95 7.05l-3.536 6.364L7.05 16.95z" />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
    </IconWrapper>
  );
});

Compass2F1.displayName = 'Compass2F1';
export default Compass2F1;
