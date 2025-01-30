import type { ComponentPropsWithoutRef } from 'react';

export const EditIcon = ({ width = 10, height = 10, fill = '#09090B', ...props }: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg width={width} height={height} viewBox='0 0 10 10' fill={fill} {...props}>
      <path
        d='M8.05998 0.13324C7.92479 0.13324 7.7842 0.187315 7.68145 0.290058L6.69188 1.27963L8.7197 3.30745L9.70927 2.31787C9.92016 2.10698 9.92016 1.76631 9.70927 1.55542L8.44391 0.290058C8.33576 0.181907 8.20058 0.13324 8.05998 0.13324ZM6.11328 3.38858L6.61077 3.88607L1.71156 8.78527H1.21407V8.28778L6.11328 3.38858ZM0.132568 7.83896L6.11328 1.85825L8.14109 3.88607L2.16039 9.86678H0.132568V7.83896Z'
        fill={fill}
      />
    </svg>
  );
};
