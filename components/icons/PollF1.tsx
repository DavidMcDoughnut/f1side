import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const PollF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M2 20h11M2 12h20M2 4h6" />
    </IconWrapper>
  );
});

PollF1.displayName = 'PollF1';
export default PollF1;
