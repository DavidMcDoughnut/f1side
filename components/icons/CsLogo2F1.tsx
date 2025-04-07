import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const CsLogo2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M4.963 19.498c2.317 1.482 5.423 1.54 7.914-.098s3.668-4.514 3.225-7.228m-8.207-.347c-.443-2.715.734-5.59 3.225-7.229 2.492-1.638 5.597-1.58 7.915-.098" />
    </IconWrapper>
  );
});

CsLogo2F1.displayName = 'CsLogo2F1';
export default CsLogo2F1;
