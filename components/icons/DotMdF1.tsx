import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const DotMdF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
});

DotMdF1.displayName = 'DotMdF1';
export default DotMdF1;
