import { cn } from '@/utils/classNameUtils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}

export const ButtonWithIcon = ({ children, icon, className = '', type = 'button', ...props }: ButtonWithIconProps) => {
  return (
    <button type={type} className={cn('flex items-center justify-center gap-1 h-8 px-3 border border-border rounded-lg hover:bg-gray-50 transition-colors', className)} {...props}>
      <span className='text-sm font-semibold'>{children}</span>
      {icon}
    </button>
  );
};
