import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Trash2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m20 9-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9m17-3h-5.625m0 0V4a2 2 0 0 0-2-2h-2.75a2 2 0 0 0-2 2v2m6.75 0h-6.75M3 6h5.625" />
    </IconWrapper>
  );
});

Trash2F1.displayName = 'Trash2F1';
export default Trash2F1;
