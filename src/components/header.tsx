import { memo } from 'react';

import { ArrowDownIcon } from '@/components/icons/arrow-down-icon';
import { SearchInput } from '@/components/ui/search-input';
import { ButtonWithIcon } from '@/components/ui/button-with-icon';

export const Header = memo(function Header() {
  return (
    <header className='flex items-center justify-between h-20 px-4 border-b border-divider'>
      <h1 className='text-3xl font-bold'>Workflows</h1>

      <div className='flex items-center gap-2'>
        <ButtonWithIcon icon={<ArrowDownIcon />}>Sort</ButtonWithIcon>
        <SearchInput placeholder='Search workflows' />
      </div>
    </header>
  );
});
