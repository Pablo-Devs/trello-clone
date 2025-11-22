"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, LayoutTemplate, Plus, Trello } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const pathname = usePathname();

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

  return (
    <aside className="hidden md:flex md:w-60 lg:w-[300px] border-r border-border bg-background h-[calc(100vh-49px)] flex-col py-8 px-2">
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
        <Button
          variant="ghost"
          className="w-full justify-start h-10 px-3 text-foreground/70 hover:bg-accent cursor-pointer"
        >
          <Plus size={18} className="mr-2" />
          <span className="font-medium">Create a Workspace</span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
