import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const TextBodyF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M2 12h11M2 20h20M2 4h6" />
    </IconWrapper>
  );
});

TextBodyF1.displayName = 'TextBodyF1';
export default TextBodyF1;
