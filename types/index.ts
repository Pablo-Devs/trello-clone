import { LucideIcon } from "lucide-react";

export type AuthProvider = "google" | "azure" | "apple" | "slack";

export interface User {
  email?: string;
  user_metadata?: {
    avatar_url?: string;
    full_name?: string;
  };
}

export type WorkspaceType = {
  id: string;
  name: string;
};

export interface Workspace {
  id: string;
  name: string;
  description: string | null;
  type_id: string | null;
  owner_id: string;
  created_at: string;
  workspace_types?: WorkspaceType;
}

export interface WorkspaceMemberRow {
  role: "owner" | "admin" | "member";
  workspaces: Workspace;
}

export interface CreateWorkspaceDialogProps {
  workspaceTypes: WorkspaceType[];
  trigger: React.ReactNode;
}

export type SidebarProps = {
  workspaceTypes: WorkspaceType[];
};

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
