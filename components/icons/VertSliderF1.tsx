import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const VertSliderF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m18 8-6-6-6 6M6 16l6 6 6-6" />
    </IconWrapper>
  );
});

VertSliderF1.displayName = 'VertSliderF1';
export default VertSliderF1;
