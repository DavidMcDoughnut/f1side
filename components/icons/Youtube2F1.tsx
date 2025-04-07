import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Youtube2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="m14 12-3.5 2v-4z" fill="currentColor" stroke="none" />
      <path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053S22 8.398 22 11.292v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.04-2.73.066-3.912.066a141 141 0 0 1-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052S2 15.602 2 12.708Z" />
    </IconWrapper>
  );
});

Youtube2F1.displayName = 'Youtube2F1';
export default Youtube2F1;
