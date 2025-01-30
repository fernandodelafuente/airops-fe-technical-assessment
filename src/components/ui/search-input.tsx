import { InputHTMLAttributes } from 'react';

import { SearchIcon } from '@/components/icons/search-icon';

import { cn } from '@/utils/classNameUtils';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchInput = ({ className = '', ...props }: SearchInputProps) => {
  return (
    <div className='relative'>
      <input
        type='text'
        {...props}
        className={cn('pl-9 pr-4 py-1.5 h-8 w-48 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-purple shadow-shadow-sm', className)}
      />
      <div className='absolute left-3 top-1/2 -translate-y-1/2'>
        <SearchIcon />
      </div>
    </div>
  );
};
