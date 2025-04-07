import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Quote2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M10 12H5a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm0 0c0 2.5-1 4-4 5.5" />
    </IconWrapper>
  );
});

Quote2F1.displayName = 'Quote2F1';
export default Quote2F1;
