export interface RideFormData {
  from: string;
  to: string;
  message: string;
  role: string;
  timestamp?: string;
}

export interface AvailableListProps {
  role: 'rider' | 'passenger';
}

export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export interface LocationPopupProps {
  activeInput?: 'from' | 'to' | null;
  onClose: () => void;
  onSelect: (location: string) => void;
  initialSearchQuery: string;
}

export interface MapPopupProps {
  onClose: () => void;
  onSelect: (location: string, coordinates: [number, number]) => void;
  initialLocation?: string;
}

export interface MessagePopupProps {
  onSelect: (message: string) => void;
  onClose: () => void;
}

export interface RideBarProps {
  fromHome?: boolean;
  role?: string;
}

export interface SideNavProps {
  isOpen: boolean;
  closeNav: () => void;
  navLinks: {
    id: number;
    title: string;
    link: string;
    icon: JSX.Element;
  }[];
}

export interface LoginFormData {
  email: string;
  password: string;
}
