import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Google2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M19.095 4.607A10.3 10.3 0 0 0 12.218 2C6.574 2 2 6.478 2 12s4.574 10 10.218 10c6.938 0 9.502-5.14 9.782-9.167h-8.318" />
    </IconWrapper>
  );
});

Google2F1.displayName = 'Google2F1';
export default Google2F1;
