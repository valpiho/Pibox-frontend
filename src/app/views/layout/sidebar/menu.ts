import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Profile',
    icon: 'home',
    link: '/general/profile'
  },
  {
    label: 'Email',
    icon: 'mail',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'Chat',
    icon: 'message-square',
    link: '',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'Calendar',
    icon: 'calendar',
    link: '',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'Documents',
    icon: 'file',
    link: '',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'Payments',
    icon: 'credit-card',
    link: '',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'Groups',
    isTitle: true
  },
  {
    label: 'My groups',
    icon: 'users',
    link: '/general/profile/groups'
  },
  {
    label: 'Find group',
    icon: 'search',
    link: '/groups/find',
  },
  {
    label: 'Create group',
    icon: 'plus',
    link: '/groups/create',
  }
];
