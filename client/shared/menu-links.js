import React from 'react';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import PersonIcon from '@material-ui/icons/Person';
import { ROUTES } from './routes-list';

export const MENU_LINKS = [
  {
    name: 'transaction',
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
];
