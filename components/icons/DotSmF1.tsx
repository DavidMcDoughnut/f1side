import * as React from "react";
import { IconWrapper, IconProps } from './icon-wrapper';

const DotSmF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
});

DotSmF1.displayName = 'DotSmF1';
export default DotSmF1;
