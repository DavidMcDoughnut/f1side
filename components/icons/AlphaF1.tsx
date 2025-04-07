import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const AlphaF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M19.333 3.9c-3.666 5.372-3.666 6.267-3.666 8.058 0 4.45.916 7.61 2.75 8.057 1.833.448 2.953-.895 4.583-3.581M15.667 12c0 4.97-3.284 9-7.334 9S1 16.97 1 12s3.283-9 7.333-9 7.334 4.03 7.334 9Z" />
    </IconWrapper>
  );
});

AlphaF1.displayName = 'AlphaF1';
export default AlphaF1;
