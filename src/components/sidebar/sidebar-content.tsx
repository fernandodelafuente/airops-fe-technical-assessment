import { PlusIcon } from '@/components/icons/plus-icon';
import { ButtonWithIcon } from '@/components/ui/button-with-icon';

import { NavItem, sidebarNavItems } from '@/config/navigation';

const NavList = ({ items }: { items: NavItem[] }) => {
  return (
    <ul className='space-y-1 px-4'>
      {items.map((item) => (
        <li key={item.id}>
          <button onClick={item.onClick} className='w-full pl-2 py-2 text-xs font-medium text-text-secondary rounded-md hover:bg-gray-50 transition-colors flex items-center'>
            <div className='flex items-center justify-center w-3 h-3 mr-2'>{item.icon}</div>
            <span>{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export const SidebarContent = () => {
  return (
    <>
      <div className='px-4'>
        <ButtonWithIcon onClick={() => {}} icon={<PlusIcon />} className='w-full gap-2 shadow-shadow-xs'>
          New
        </ButtonWithIcon>
      </div>

      <nav className='mt-6 flex-1'>
        <NavList items={sidebarNavItems} />
      </nav>
    </>
  );
};
