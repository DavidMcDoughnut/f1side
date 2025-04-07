import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const PostF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M13.638 6 3.5 16.5 2 22l5.5-1.5L17.638 10m-4-4 2.448-2.536a2 2 0 0 1 2.853-.025L20.11 4.61a2 2 0 0 1 .025 2.804L17.638 10m-4-4 4 4" />
    </IconWrapper>
  );
});

PostF1.displayName = 'PostF1';
export default PostF1;
