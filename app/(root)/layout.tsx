import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { Toaster } from "@/components/ui/sonner"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Header />
        { children }
        <Toaster />
        <Footer />
    </>
  )
}

export default Layout