import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const InputOutput2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3 19V5m11 14a7.001 7.001 0 0 0 4.95-11.95A7 7 0 1 0 14 19" />
    </IconWrapper>
  );
});

InputOutput2F1.displayName = 'InputOutput2F1';
export default InputOutput2F1;
