import { ChartIcon } from '@/components/icons/chart-icon';
import { DatabaseIcon } from '@/components/icons/database-icon';
import { SettingsIcon } from '@/components/icons/settings-icon';

export type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export const sidebarNavItems: NavItem[] = [
  {
    id: 'data',
    label: 'Data Name',
    icon: <DatabaseIcon />,
    onClick: () => {},
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    icon: <ChartIcon />,
    onClick: () => {},
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: () => {},
  },
];
