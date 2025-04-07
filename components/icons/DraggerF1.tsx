import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const DraggerF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M9 18V6m6 0v12" />
    </IconWrapper>
  );
});

DraggerF1.displayName = 'DraggerF1';
export default DraggerF1;
