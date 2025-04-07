import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const NochangeF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M8 12h8" />
    </IconWrapper>
  );
});

NochangeF1.displayName = 'NochangeF1';
export default NochangeF1;
