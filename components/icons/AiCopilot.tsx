import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const AiCopilot = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3 12c4.268 0 9-4.637 9-9 0 4.363 4.713 9 9 9-4.287 0-9 4.713-9 9 0-4.287-4.732-9-9-9Z" />
    </IconWrapper>
  );
});

AiCopilot.displayName = 'AiCopilot';
export default AiCopilot;
