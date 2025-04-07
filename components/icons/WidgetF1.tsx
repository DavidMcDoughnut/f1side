import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const WidgetF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M10 3H3v9h7zM21 3h-7v5h7zM21 12h-7v9h7zM10 16H3v5h7z" />
    </IconWrapper>
  );
});

WidgetF1.displayName = 'WidgetF1';
export default WidgetF1;
