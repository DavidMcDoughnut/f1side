import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const MoveV2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m5 9-3 3m0 0 3 3m-3-3h6m1-7 3-3m0 0 3 3m-3-3v6m3 11-3 3m0 0-3-3m3 3v-6m7-7 3 3m0 0-3 3m3-3h-6" />
    </IconWrapper>
  );
});

MoveV2F1.displayName = 'MoveV2F1';
export default MoveV2F1;
