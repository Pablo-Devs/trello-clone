import React from "react"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/layouts/Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
        { children }
        <Toaster />
    </main>
  )
}

export default Layout