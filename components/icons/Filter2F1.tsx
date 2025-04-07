import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Filter2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.415 6.414a1 1 0 0 0-.292.707v6.305a1 1 0 0 1-1.243.97l-2-.5a1 1 0 0 1-.757-.97v-5.805a1 1 0 0 0-.293-.707L3.292 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1" />
    </IconWrapper>
  );
});

Filter2F1.displayName = 'Filter2F1';
export default Filter2F1;
