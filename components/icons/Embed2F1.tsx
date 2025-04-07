import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Embed2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M13.5 6 10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5" />
    </IconWrapper>
  );
});

Embed2F1.displayName = 'Embed2F1';
export default Embed2F1;
