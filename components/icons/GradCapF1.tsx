import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const GradCapF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M22.5 13V9.5l-2-1m-16 2v5.413a2 2 0 0 0 1.142 1.806l5 2.374a2 2 0 0 0 1.716 0l5-2.373a2 2 0 0 0 1.142-1.807V10.5M2.573 8.463l8.66-4.329a.6.6 0 0 1 .535 0l8.66 4.33a.6.6 0 0 1 0 1.073l-8.66 4.33a.6.6 0 0 1-.536 0l-8.659-4.33a.6.6 0 0 1 0-1.074" />
    </IconWrapper>
  );
});

GradCapF1.displayName = 'GradCapF1';
export default GradCapF1;
