import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Toaster } from "@/components/ui/sonner";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Toaster />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;