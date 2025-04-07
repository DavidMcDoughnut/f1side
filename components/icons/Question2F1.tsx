import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Question2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0 0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011" />
    </IconWrapper>
  );
});

Question2F1.displayName = 'Question2F1';
export default Question2F1;
