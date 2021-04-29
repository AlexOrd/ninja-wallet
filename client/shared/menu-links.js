import React from 'react';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { ROUTES } from './routes-list';

export const MENU_LINKS = [
  {
    name: 'transactions',
    path: ROUTES.transactions,
    icon: <ReceiptIcon />,
  },
  {
    name: 'categories',
    path: ROUTES.categories,
    icon: <DonutLargeIcon />,
  },
  {
    name: 'profile',
    path: ROUTES.profile,
    icon: <PersonIcon />,
  },
  {
    name: 'settings',
    path: ROUTES.settings,
    icon: <SettingsIcon />,
  },
];
