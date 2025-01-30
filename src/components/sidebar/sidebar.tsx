import { memo } from 'react';

import { SidebarContent } from './sidebar-content';
import { SidebarHeader } from './sidebar-header';

export const Sidebar = memo(function Sidebar() {
  return (
    <aside className='flex flex-col w-sidebar border-r border-border'>
      <SidebarHeader />
      <SidebarContent />
    </aside>
  );
});
