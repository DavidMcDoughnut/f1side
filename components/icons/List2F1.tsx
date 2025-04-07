import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const List2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M8 6h12M4 6.01l.01-.011M4 12.01l.01-.011M4 18.01l.01-.011M8 12h12M8 18h12" />
    </IconWrapper>
  );
});

List2F1.displayName = 'List2F1';
export default List2F1;
