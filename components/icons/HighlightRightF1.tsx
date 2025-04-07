import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const HighlightRightF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m23 1-4.583 11H12m0 0V4.667M12 12v7.333m-9.854.917L1 23m4.583-11-1.146 2.75" />
    </IconWrapper>
  );
});

HighlightRightF1.displayName = 'HighlightRightF1';
export default HighlightRightF1;
