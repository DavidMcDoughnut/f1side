import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const FilterSliderF1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M2 5h10m5 3V2M7 22v-6m-5 3h5M17 5h5M12 19h10" />
    </IconWrapper>
  );
});

FilterSliderF1.displayName = 'FilterSliderF1';
export default FilterSliderF1;
