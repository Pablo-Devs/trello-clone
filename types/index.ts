import { LucideIcon } from "lucide-react";

export type AuthProvider = "google" | "azure" | "apple" | "slack";

export interface User {
  email?: string;
  user_metadata?: {
    avatar_url?: string;
    full_name?: string;
  };
}

export interface DropdownItem {
  title: string;
  description: string;
  icon: LucideIcon | null;
}

export interface DropdownMenuProps {
  items: DropdownItem[];
  className?: string;
  iconSize?: number;
}

export interface DesktopNavItemProps {
  label: string;
  dropdownKey?: string;
  activeDropdown: string | null;
  onToggle: (key: string) => void;
  items?: DropdownItem[];
}

export interface MobileNavItemProps {
  label: string;
  dropdownKey?: string;
  activeDropdown: string | null;
  onToggle: (key: string) => void;
  items?: DropdownItem[];
  isMenuOpen: boolean;
  delay: string;
}
