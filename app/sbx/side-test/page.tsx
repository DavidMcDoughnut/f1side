import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { AppSidebar } from "@/components/sidebar-simp"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: 'Clean Base',
}

export default function DashboardPage() {
  return (
    <div className="relative">
      <Header className="fixed top-0 left-0 right-0 z-[60]"/>
      <SidebarProvider 
        className="pt-[3.5rem]"
        style={{ 
          "--sidebar-width": "16rem",
        } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
            <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
} 