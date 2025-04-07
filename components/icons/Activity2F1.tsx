import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Activity2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3 12h3l3-9 6 18 3-9h3" />
    </IconWrapper>
  );
});

Activity2F1.displayName = 'Activity2F1';
export default Activity2F1;
