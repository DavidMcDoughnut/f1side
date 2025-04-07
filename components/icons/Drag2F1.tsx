import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Drag2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12 12 4 4m8 8 8-8m-8 8-8 8m8-8 8 8M4 4v4m0-4h4m12 0v4m0-4h-4M4 20v-4m0 4h4m12 0v-4m0 4h-4" />
    </IconWrapper>
  );
});

Drag2F1.displayName = 'Drag2F1';
export default Drag2F1;
