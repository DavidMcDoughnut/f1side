import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const SineWave2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M5 12H3c0-3.857 1.286-9 3.857-9 3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12h-2m-3.5 0h1m-9 0h1" />
    </IconWrapper>
  );
});

SineWave2F1.displayName = 'SineWave2F1';
export default SineWave2F1;
