import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const GifF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12 6v12.6m2.799 0V6h4.2m-4.2 6.3h3.5M8.85 9.623V7.925a1.925 1.925 0 1 0-3.85 0V16.5a2.1 2.1 0 1 0 4.2 0V13H7.363" />
    </IconWrapper>
  );
});

GifF1.displayName = 'GifF1';
export default GifF1;
