import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Wallet2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Zm0 0v-.463a2 2 0 0 1 1.485-1.933l11-2.933A2 2 0 0 1 18 5.603V7m-1.25 7.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </IconWrapper>
  );
});

Wallet2F1.displayName = 'Wallet2F1';
export default Wallet2F1;
