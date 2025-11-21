import React from "react"
import { Toaster } from "@/components/ui/sonner"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        { children }
        <Toaster />
    </main>
  )
}

export default Layout