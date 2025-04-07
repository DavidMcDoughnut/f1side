import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const SendArrow2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M2.421 11.563c-1.204.489-1.113 2.224.137 2.583l6.305 1.813 2.88 5.895c.57 1.168 2.296.957 2.568-.314l2.936-13.69a1.369 1.369 0 0 0-1.853-1.556z" clipRule="evenodd" />
    </IconWrapper>
  );
});

SendArrow2F1.displayName = 'SendArrow2F1';
export default SendArrow2F1;
