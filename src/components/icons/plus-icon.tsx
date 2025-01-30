import type { ComponentPropsWithoutRef } from 'react';

export const PlusIcon = ({ width = 11, height = 11, fill = '#09090B', ...props }: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg width={width} height={height} viewBox='0 0 11 11' fill={fill} {...props}>
      <path d='M10.3215 6.38058H6.17868V10.5234H4.46439V6.38058H0.321533V4.66629H4.46439V0.523438H6.17868V4.66629H10.3215V6.38058Z' fill={fill} />
    </svg>
  );
};
