import React from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layouts/Navbar";
import SidebarWrapper from "@/components/wrappers/sidebar-wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarWrapper />
        <div className="flex-1 overflow-y-auto py-18 pl-18 pr-10">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
