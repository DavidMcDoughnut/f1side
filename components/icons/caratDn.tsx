import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const CaratDn = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} viewBox="0 0 12 12" {...props}>
      {/* Path uses fill, setting fill="currentColor" and stroke="none" */}
      <path d="M6.81369 8.86078C6.41487 9.41912 5.58504 9.41912 5.18622 8.86077L2.12944 4.58123C1.65668 3.91937 2.12981 3 2.94318 3L9.0568 3C9.87017 3 10.3433 3.91937 9.87053 4.58124L6.81369 8.86078Z" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
});

CaratDn.displayName = 'CaratDn';
export default CaratDn; 