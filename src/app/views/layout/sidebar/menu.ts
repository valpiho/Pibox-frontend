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
    label: 'Find group',
    icon: 'search',
    link: '/group/find',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'Create group',
    icon: 'plus',
    link: '/group/create',
    badge: {
      variant: 'primary',
      text: 'Soon',
    }
  },
  {
    label: 'My groups',
    isTitle: true
  },
  {
    label: 'Pibox',
    link: '',
    badge: {
      variant: 'info',
      text: 'Owner',
    }
  },
  {
    label: 'SK Eola',
    link: '',
    badge: {
      variant: 'info',
      text: 'Guest',
    }
  },
  {
    label: 'SDA',
    link: '',
    badge: {
      variant: 'info',
      text: 'Student',
    }
  },

];
