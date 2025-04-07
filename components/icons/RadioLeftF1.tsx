import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const RadioLeftF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M14.154 19.278c-1.779-2.055-2.753-4.645-2.753-7.32 0-2.674.974-5.264 2.753-7.32M10.319 23C7.536 19.962 6 16.05 6 12s1.536-7.962 4.319-11M18 15.608a6.08 6.08 0 0 1-1.198-3.613A6.08 6.08 0 0 1 18 8.382" />
    </IconWrapper>
  );
});

RadioLeftF1.displayName = 'RadioLeftF1';
export default RadioLeftF1;
