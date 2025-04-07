import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const SendHorizF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3.246 3.741c-.398-.876.55-1.754 1.392-1.29l15.769 8.673a1 1 0 0 1 0 1.752L4.638 21.55c-.843.464-1.79-.414-1.392-1.29l3.566-7.845a1 1 0 0 0 0-.828z" />
    </IconWrapper>
  );
});

SendHorizF1.displayName = 'SendHorizF1';
export default SendHorizF1;
