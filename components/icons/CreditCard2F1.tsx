import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const CreditCard2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M22 9v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 0H6" />
    </IconWrapper>
  );
});

CreditCard2F1.displayName = 'CreditCard2F1';
export default CreditCard2F1;
