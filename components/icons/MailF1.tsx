import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const MailF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m7 9 5 3.5L17 9M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
    </IconWrapper>
  );
});

MailF1.displayName = 'MailF1';
export default MailF1;
