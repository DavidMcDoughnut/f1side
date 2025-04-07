import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Dollar2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M16.154 7.154c-.95-.949-2.62-1.608-4.154-1.65m0 0c-1.826-.049-3.461.778-3.461 3.034 0 4.154 7.615 2.077 7.615 6.231 0 2.37-2.027 3.388-4.154 3.311m0-12.576V3M7.846 16.154c.893 1.19 2.552 1.868 4.154 1.926m0 0V21" />
    </IconWrapper>
  );
});

Dollar2F1.displayName = 'Dollar2F1';
export default Dollar2F1;
