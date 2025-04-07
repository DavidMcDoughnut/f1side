import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const NumberList2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M9 5h12M5 7V3L3.5 4.5m2 9.5h-2l1.905-2.963a.43.43 0 0 0 .072-.323C5.42 10.456 5.216 10 4.5 10c-1 0-1 .889-1 .889v.222M3.5 21h1a1 1 0 0 0 0-2H4l1.5-2h-2M9 12h12M9 19h12" />
    </IconWrapper>
  );
});

NumberList2F1.displayName = 'NumberList2F1';
export default NumberList2F1;
