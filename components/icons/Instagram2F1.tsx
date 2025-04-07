import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Instagram2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
      <path d="m17.5 6.51.01-.011" />
    </IconWrapper>
  );
});

Instagram2F1.displayName = 'Instagram2F1';
export default Instagram2F1;
