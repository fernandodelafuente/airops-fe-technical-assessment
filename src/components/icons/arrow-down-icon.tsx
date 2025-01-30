import type { ComponentPropsWithoutRef } from 'react';

export const ArrowDownIcon = ({ width = 11, height = 6, fill = '#09090B', ...props }: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg width={width} height={height} viewBox='0 0 11 6' fill={fill} {...props}>
      <path d='M0.258881 0.5L5.23343 5.47455L10.208 0.5H0.258881Z' fill={fill} />
    </svg>
  );
};
