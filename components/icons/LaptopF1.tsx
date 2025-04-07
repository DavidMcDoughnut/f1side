import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const LaptopF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M3.772 14.684A1 1 0 0 1 4.721 14h14.558a1 1 0 0 1 .949.684l1.333 4A1 1 0 0 1 20.613 20H3.387a1 1 0 0 1-.948-1.316z" />
    </IconWrapper>
  );
});

LaptopF1.displayName = 'LaptopF1';
export default LaptopF1;
