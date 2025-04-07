import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const CaratUp = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} viewBox="0 0 12 12" {...props}>
      {/* Path uses fill, setting fill="currentColor" and stroke="none" */}
      <path d="M5.18631 3.13922C5.58513 2.58088 6.41496 2.58088 6.81378 3.13923L9.87056 7.41877C10.3433 8.08063 9.87019 9 9.05682 9H2.9432C2.12983 9 1.6567 8.08063 2.12947 7.41876L5.18631 3.13922Z" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
});

CaratUp.displayName = 'CaratUp';
export default CaratUp; 