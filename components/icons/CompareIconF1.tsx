import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const CompareIconF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m22 10.571-8.636 9.048-4.546-4.762L2 22M22 2l-8.636 9.048-4.546-4.762L2 13.429" />
    </IconWrapper>
  );
});

CompareIconF1.displayName = 'CompareIconF1';
export default CompareIconF1;
