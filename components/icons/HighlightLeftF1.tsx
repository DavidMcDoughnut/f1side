import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const HighlightLeftF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m1 23 4.583-11H12m0 0v7.333M12 12V4.667m9.854-.917L23 1m-4.583 11 1.145-2.75" />
    </IconWrapper>
  );
});

HighlightLeftF1.displayName = 'HighlightLeftF1';
export default HighlightLeftF1;
