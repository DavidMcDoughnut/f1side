import type { Metadata } from 'next'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Header } from "@/components/header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComboTab } from "@/components/ui/combo-tabs"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { TickerCard } from "@/components/ui/ticker-card"
import { SidebarRight, SidebarRightProvider, SidebarRightTrigger } from "@/components/ui/sidebar-right"

export const metadata: Metadata = {
  title: 'Dashboard Three',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header 
        className="sticky top-0 z-50"
        centerContent={
          <div className="flex items-center justify-end w-full">
            <SidebarRightTrigger />
          </div>
        }
      />
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-page overflow-y-auto">
            <SidebarRightProvider>
              <div id="content" className="mx-auto max-w-7xl px-7 py-6 w-full">
                <div className="flex flex-1 flex-col gap-4 ">
                  <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-2">
                    <Card variant="muted" className="h-13">
                    </Card>
                    <Card variant="muted" className="h-13">
                    </Card>
                    <Card variant="muted" className="h-13">
                    </Card>
                    <Card variant="muted" className="h-13">
                    </Card>
                  </div>
                  
                  {/* MARKET SUMMARY - Wrapped in a section div */}
                  <div className="section flex flex-col gap-4">

                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>


                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-1">
                    <Card variant="static" className="h-60"></Card>
                    </div>
                  </div> {/* End of section div */}



                  {/* MARKET DATA */}

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList size="lg">
                      <TabsTrigger value="overview" size="lg">Tab 1</TabsTrigger>
                      <TabsTrigger value="analytics" size="lg">Tab 2</TabsTrigger>
                      <TabsTrigger value="reports" size="lg">Tab 3</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  {/* SENTIMENT */}
                  <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>
                  </div>
                  <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>
                  </div>
                  <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>
                      <Card variant="static" className="h-60"></Card>
                  </div>
                </div>
              </div>
              
              <SidebarRight variant="default" collapsible="icon">
                <div className="flex-1 overflow-auto">
                  {/* Content for each section will be added here */}
                </div>
              </SidebarRight>
            </SidebarRightProvider>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  )
} 