"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, LayoutTemplate, Plus, Trello, ChevronDown, ChevronUp, Users, Settings as SettingsIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarProps } from "@/types";
import { getInitials } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CreateWorkspaceDialog } from "../CreateWorkspaceDialog";

interface Workspace {
  id: string;
  name: string;
  member_role?: string;
}

const Sidebar = ({ workspaceTypes }: SidebarProps) => {
  const pathname = usePathname();
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedWorkspace, setExpandedWorkspace] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWorkspaces() {
      try {
        const response = await fetch("/api/workspace", {
          cache: "no-store",
        });
        const data = await response.json();
        if (data.workspaces) {
          setWorkspaces(data.workspaces);
          // Auto-expand first workspace if available
          if (data.workspaces.length > 0) {
            setExpandedWorkspace(data.workspaces[0].id);
          }
        }
      } catch (error) {
        console.error("Failed to fetch workspaces:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkspaces();
  }, []);

  const isActive = (path: string) => {
    if (path === "/boards") {
      return (
        pathname === "/" ||
        pathname === "/boards" ||
        pathname.startsWith("/boards")
      );
    }
    return pathname === path;
  };

  const toggleWorkspace = (workspaceId: string) => {
    setExpandedWorkspace(expandedWorkspace === workspaceId ? null : workspaceId);
  };

  return (
    <aside className="hidden md:flex md:w-60 lg:w-[300px] border-r border-border bg-background h-[calc(100vh-49px)] flex-col py-8 px-2 overflow-y-auto">
      <nav className="flex flex-col w-full p-3 space-y-4">
        <Link href="/boards">
          <Button
            variant="ghost"
            className={`w-full justify-start h-10 px-3 cursor-pointer ${
              isActive("/boards")
                ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                : "text-foreground/80 hover:bg-accent"
            }`}
          >
            <Home size={18} className="mr-3" />
            <span className="font-semibold">Boards</span>
          </Button>
        </Link>

        <Link href="/templates">
          <Button
            variant="ghost"
            className={`w-full justify-start h-10 px-3 cursor-pointer ${
              isActive("/templates")
                ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                : "text-foreground/80 hover:bg-accent"
            }`}
          >
            <LayoutTemplate size={18} className="mr-3" />
            <span className="font-semibold">Templates</span>
          </Button>
        </Link>

        <Link href="/home">
          <Button
            variant="ghost"
            className={`w-full justify-start h-10 px-3 cursor-pointer ${
              isActive("/home")
                ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                : "text-foreground/80 hover:bg-accent"
            }`}
          >
            <Trello className="mr-3 w-[18px] h-[18px]" />
            <span className="font-semibold">Home</span>
          </Button>
        </Link>
      </nav>

      <Separator className="w-full" />

      <div className="px-3 py-3">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-24 mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ) : workspaces.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase px-3 mb-2">
              Workspaces
            </h3>
            {workspaces.map((workspace) => (
              <div key={workspace.id}>
                <Button
                  variant="ghost"
                  onClick={() => toggleWorkspace(workspace.id)}
                  className="w-full justify-between h-10 px-3 text-foreground hover:bg-accent cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="bg-linear-to-br from-blue-500 to-purple-500 text-white text-xs font-semibold">
                        {getInitials(workspace.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm truncate max-w-[150px]">
                      {workspace.name}
                    </span>
                  </div>
                  {expandedWorkspace === workspace.id ? (
                    <ChevronUp size={16} className="text-muted-foreground" />
                  ) : (
                    <ChevronDown size={16} className="text-muted-foreground" />
                  )}
                </Button>

                {/* Workspace submenu */}
                {expandedWorkspace === workspace.id && (
                  <div className="ml-3 mt-1 space-y-1">
                    <Link href={`/workspace/${workspace.id}/boards`}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start h-9 px-3 text-sm ${
                          pathname.includes(`/workspace/${workspace.id}/boards`)
                            ? "bg-primary/10 text-primary hover:bg-primary/20"
                            : "text-foreground/80 hover:bg-accent"
                        }`}
                      >
                        <Home size={16} className="mr-3" />
                        <span className="font-medium">Boards</span>
                      </Button>
                    </Link>

                    <Link href={`/workspace/${workspace.id}/members`}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-between h-9 px-3 text-sm ${
                          pathname.includes(`/workspace/${workspace.id}/members`)
                            ? "bg-primary/10 text-primary hover:bg-primary/20"
                            : "text-foreground/80 hover:bg-accent"
                        }`}
                      >
                        <div className="flex items-center">
                          <Users size={16} className="mr-3" />
                          <span className="font-medium">Members</span>
                        </div>
                        <Plus size={16} className="text-muted-foreground" />
                      </Button>
                    </Link>

                    <Link href={`/workspace/${workspace.id}/settings`}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start h-9 px-3 text-sm ${
                          pathname.includes(`/workspace/${workspace.id}/settings`)
                            ? "bg-primary/10 text-primary hover:bg-primary/20"
                            : "text-foreground/80 hover:bg-accent"
                        }`}
                      >
                        <SettingsIcon size={16} className="mr-3" />
                        <span className="font-medium">Settings</span>
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <CreateWorkspaceDialog
            workspaceTypes={workspaceTypes}
            trigger={
              <Button
                variant="ghost"
                className="w-full justify-start h-10 px-3 text-foreground/70 hover:bg-accent cursor-pointer"
              >
                <Plus size={18} className="mr-2" />
                <span className="font-medium">Create a Workspace</span>
              </Button>
            }
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;