import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const SendVertF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3.741 20.754c-.876.398-1.754-.55-1.29-1.392l8.673-15.769a1 1 0 0 1 1.752 0l8.673 15.769c.464.843-.414 1.79-1.29 1.392l-7.845-3.566a1 1 0 0 0-.828 0z" />
    </IconWrapper>
  );
});

SendVertF1.displayName = 'SendVertF1';
export default SendVertF1;
