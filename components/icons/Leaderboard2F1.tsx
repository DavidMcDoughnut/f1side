import * as React from 'react';
import { IconWrapper, IconProps } from './icon-wrapper';

const Leaderboard2F1 = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <path d="M15 20H9m6 0V4.873c0-.232-.063-.454-.176-.617C14.712 4.092 14.56 4 14.4 4H9.6c-.16 0-.312.092-.424.256A1.1 1.1 0 0 0 9 4.873V20m6 0h5.4c.16 0 .312-.092.424-.256.113-.163.176-.385.176-.617v-4.8c0-.231-.063-.453-.176-.617s-.265-.256-.424-.256h-4.8c-.16 0-.312.092-.424.256a1.1 1.1 0 0 0-.176.617zm-6 0v-8.582c0-.231-.063-.453-.176-.617s-.265-.255-.424-.255H3.6c-.16 0-.312.091-.424.255a1.1 1.1 0 0 0-.176.617v7.71c0 .23.063.453.176.616.112.164.265.256.424.256z" />
    </IconWrapper>
  );
});

Leaderboard2F1.displayName = 'Leaderboard2F1';
export default Leaderboard2F1;
