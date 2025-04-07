import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const VolumeLF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M4.928 4.93a10 10 0 0 0 0 14.14m3.53-10.61a5 5 0 0 0 0 7.07M12.998 5 17.45 8.56A2 2 0 0 0 18.7 9h2.298a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2.299a2 2 0 0 0-1.249.438L12.998 19z" />
    </IconWrapper>
  );
});

VolumeLF1.displayName = 'VolumeLF1';
export default VolumeLF1;
