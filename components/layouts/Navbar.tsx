"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TrelloIcon } from "@/constants/Logos";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HelpCircle,
  Bell,
  LayoutDashboard,
  Megaphone,
  ChevronRight,
  Users,
  LogOut,
  Home,
  Settings,
  MoreHorizontal,
  MessageSquare,
  Info,
  Search,
  Ellipsis,
} from "lucide-react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { getUser, signOut } from "@/lib/services/auth";
import { User as UserType } from "@/types";
import { getInitials } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      setUser(userData);
    }
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      router.push("/signin");
    } catch (error) {
      console.error(error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <header className="w-full flex items-center justify-between gap-4 border-b border-border px-3 py-1.5">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LayoutDashboard size={16} className="text-foreground/80" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-80">
            <div className="p-2">
              <DropdownMenuItem className="cursor-pointer p-3 rounded">
                <Home size={18} className="mr-3" />
                <span className="font-medium">Home</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-1">
                <div className="w-[18px] h-[18px] mr-3 flex items-center justify-center bg-primary rounded">
                  <TrelloIcon />
                </div>
                <span className="font-medium">Trello</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-1">
                <Users size={18} className="mr-3" />
                <span className="font-medium">Teams</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-1">
                <Settings size={18} className="mr-3" />
                <span className="font-medium">Administration</span>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator />

            <div className="p-2">
              <DropdownMenuLabel className="px-3 py-2 text-xs text-muted-foreground font-semibold">
                Recommended for your team
              </DropdownMenuLabel>

              <DropdownMenuItem className="cursor-pointer p-3 rounded justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-secoundary font-bold">
                    ⚡
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      Jira Service Management
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Collaborative IT service management
                    </span>
                  </div>
                </div>
                <MoreHorizontal size={16} className="text-muted-foreground" />
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded justify-between mt-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-secondary font-bold">
                    ◆
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      Jira Product Discovery
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Prioritize, collaborate, and deliver new id...
                    </span>
                  </div>
                </div>
                <MoreHorizontal size={16} className="text-muted-foreground" />
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded justify-between mt-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-background font-bold">
                    ∞
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Confluence</span>
                    <span className="text-xs text-muted-foreground">
                      Document collaboration
                    </span>
                  </div>
                </div>
                <MoreHorizontal size={16} className="text-muted-foreground" />
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-2">
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center mr-3">
                  <LayoutDashboard size={16} />
                </div>
                <span className="font-medium text-sm">More Atlassian apps</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/" className="flex items-center">
          <TrelloIcon />
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LayoutDashboard size={20} className="text-foreground/80" />
          <span className="sr-only">Open menu</span>
        </Button>

        <Link href="/" className="flex items-center">
          <TrelloIcon />
        </Link>
      </div>

      {/* Search and Create - Hidden on Mobile */}
      <div className="hidden md:flex flex-1 max-w-2xl mx-4 items-center gap-2">
        <Input
          type="search"
          placeholder="Search"
          className="flex-1 h-8 bg-background border border-border/50 focus:border-primary/50 rounded-none"
        />
        <Button
          type="button"
          variant="default"
          className="cursor-pointer h-8 px-3 text-sm font-medium bg-primary hover:bg-primary/90 whitespace-nowrap rounded"
        >
          Create
        </Button>
      </div>

      {/* Search Icon */}
      <div className="flex md:hidden flex-1 justify-center">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Search size={20} className="text-foreground/70" />
        </Button>
      </div>

      <div className="flex items-center gap-2">

        {/* Mobile Create Button */}
        <Button
          type="button"
          variant="default"
          className="md:hidden cursor-pointer h-8 px-3 text-sm font-medium bg-primary hover:bg-primary/90 whitespace-nowrap rounded"
        >
          Create
        </Button>

        {/* Desktop Icons */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex h-8 w-8 text-foreground/70 hover:text-foreground"
        >
          <Megaphone size={18} />
          <span className="sr-only">Announcements</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex h-8 w-8 text-foreground/70 hover:text-foreground"
        >
          <Bell size={18} />
          <span className="sr-only">Notifications</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex h-8 w-8 text-foreground/70 hover:text-foreground"
        >
          <HelpCircle size={18} />
          <span className="sr-only">Help</span>
        </Button>

        {/* Desktop Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="hidden md:flex">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full p-0"
            >
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage
                  src={user?.user_metadata?.avatar_url}
                  alt={user?.user_metadata?.full_name ?? user?.email}
                />
                <AvatarFallback className="bg-linear-to-br from-orange-400 to-orange-600 text-foreground text-xs font-bold">
                  {getInitials(user?.email, user?.user_metadata?.full_name)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="px-2 py-3">
              <DropdownMenuLabel className="font-normal p-0 mb-2">
                <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                  ACCOUNT
                </div>
              </DropdownMenuLabel>

              <div className="flex items-start gap-3 p-2 rounded hover:bg-accent">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={user?.user_metadata?.avatar_url}
                    alt={user?.user_metadata?.full_name ?? user?.email}
                  />
                  <AvatarFallback className="bg-linear-to-br from-orange-400 to-orange-600 text-foreground text-sm font-semibold">
                    {getInitials(user?.email, user?.user_metadata?.full_name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {user?.user_metadata?.full_name ?? "User"}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {user?.email}
                  </div>
                </div>
              </div>

              <DropdownMenuItem className="mt-2 cursor-pointer">
                Switch accounts
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer justify-between">
                Manage account
                <ChevronRight size={16} className="text-muted-foreground" />
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator />

            <div className="px-2 py-2">
              <DropdownMenuLabel className="font-normal p-0 mb-2">
                <div className="text-xs text-muted-foreground uppercase font-semibold">
                  TRELLO
                </div>
              </DropdownMenuLabel>

              <DropdownMenuItem className="cursor-pointer">
                Profile and visibility
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                Activity
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                Cards
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer justify-between">
                Theme
                <ChevronRight size={16} className="text-muted-foreground" />
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator />

            <div className="px-2 py-2">
              <DropdownMenuItem className="cursor-pointer">
                <Users size={16} className="mr-2" />
                Create Workspace
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator />

            <div className="px-2 py-2">
              <DropdownMenuItem className="cursor-pointer">
                Help
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                Shortcuts
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator />

            <div className="px-2 py-2">
              <DropdownMenuItem
                className="cursor-pointer text-destructive focus:text-destructive"
                onClick={handleSignOut}
              >
                <LogOut size={16} className="mr-2" />
                Log out
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="flex md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
              <Ellipsis size={20} className="text-foreground/80" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <div className="p-2">
              <DropdownMenuItem className="cursor-pointer p-3 rounded">
                <Avatar className="h-6 w-6 mr-3">
                  <AvatarImage
                    src={user?.user_metadata?.avatar_url}
                    alt={user?.user_metadata?.full_name ?? user?.email}
                  />
                  <AvatarFallback className="bg-linear-to-br from-orange-400 to-orange-600 text-foreground text-xs font-semibold">
                    {getInitials(user?.email, user?.user_metadata?.full_name)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">Account</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-1">
                <MessageSquare size={18} className="mr-3" />
                <span className="font-medium">Feedback</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-1">
                <Bell size={18} className="mr-3" />
                <span className="font-medium">Notifications</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer p-3 rounded mt-1">
                <Info size={18} className="mr-3" />
                <span className="font-medium">Information</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-2" />

              <DropdownMenuItem
                className="cursor-pointer p-3 rounded text-destructive focus:text-destructive"
                onClick={handleSignOut}
              >
                <LogOut size={18} className="mr-3" />
                <span className="font-medium">Log out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
