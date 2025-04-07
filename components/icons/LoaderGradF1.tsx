import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const LoaderGradF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  // Note: strokeWidth prop on IconWrapper defaults to 1.5, but original SVG used 2.
  // Pass strokeWidth={2} explicitly if the thicker line is desired.
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M12 22v-4" />
      <path d="M12 6V2" opacity={0.4} />
      <path d="m16.24 7.76 2.83-2.83" opacity={0.55} />
      <path d="M2 12h4" opacity={0.1} />
      <path d="M18 12h4" opacity={0.7} />
      <path d="m4.93 4.93 2.83 2.83" opacity={0.25} />
      <path d="m16.24 16.24 2.83 2.83" opacity={0.85} />
    </IconWrapper>
  );
});

LoaderGradF1.displayName = 'LoaderGradF1';
export default LoaderGradF1;
