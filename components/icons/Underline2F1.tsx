import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Underline2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M16 5v6a4 4 0 1 1-8 0V5M6 19h12" />
    </IconWrapper>
  );
});

Underline2F1.displayName = 'Underline2F1';
export default Underline2F1;
