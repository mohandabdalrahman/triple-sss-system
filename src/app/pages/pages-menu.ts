import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },

  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];
