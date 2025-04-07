import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const SendDiagF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  // Note: Original SVG used a clipPath, which is not directly transferable here without more complex handling.
  // Rendering only the path element.
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M2.97 9.35c-.9-.338-.852-1.628.072-1.896l17.283-5.018a1 1 0 0 1 1.24 1.24l-5.018 17.282c-.269.924-1.56.973-1.897.072l-3.026-8.069a1 1 0 0 0-.585-.585z" />
    </IconWrapper>
  );
});

SendDiagF1.displayName = 'SendDiagF1';
export default SendDiagF1;
