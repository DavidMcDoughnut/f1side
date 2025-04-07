import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Bold2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12 11.667H8m4 0s3.333 0 3.333-3.334S12 5 12 5H8.6a.6.6 0 0 0-.6.6v6.067m4 0s4 0 4 3.666S12 19 12 19H8.6a.6.6 0 0 1-.6-.6v-6.733" />
    </IconWrapper>
  );
});

Bold2F1.displayName = 'Bold2F1';
export default Bold2F1;
