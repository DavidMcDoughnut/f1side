import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const NewChatF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12.5 8.292v6.416M9.292 11.5h6.417m5.291 0a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </IconWrapper>
  );
});

NewChatF1.displayName = 'NewChatF1';
export default NewChatF1;
