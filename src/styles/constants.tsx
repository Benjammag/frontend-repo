import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Overview',
        path: '/',
        icon: <Icon icon="mdi:bar-chart" width="24" height="24" />,
    },
    {
        title: 'Property',
        path: '/property',
        icon: <Icon icon="si:home-line" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: 'Add Property', path: '/projects' },
            { title: 'Properties', path: '/projects/web-design' },
        ],
    },
    {
        title: 'Customers',
        path: '/customerss',
        icon: <Icon icon="ic:outline-people-alt" width="24" height="24" />,
    },
    {
        title: 'Payments',
        path: '/payments',
        icon: <Icon icon="hugeicons:credit-card-accept" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: 'Account', path: '/payments/account' },
            { title: 'Privacy', path: '/payments/privacy' },
        ],
    },
    {
        title: 'Investments',
        path: '/investments',
        icon: <Icon icon="lets-icons:chart-light" width="24" height="24" />,
    },
    {
        title: 'Review',
        path: '/investments',
        icon: <Icon icon="tabler:flag" width="24" height="24" />,
    },
];

export const SIDENAV_ITEMSS: SideNavItem[] = [
    {
        title: 'Settings',
        path: '/settings',
        icon: <Icon icon="weui:setting-outlined" width="24" height="24" />,
    },
];