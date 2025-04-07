import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { TickerCard } from "@/components/ui/ticker-card"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Package2, Search } from "lucide-react"

export const metadata: Metadata = {
  title: 'Dashboard Three',
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header 
        variant="standard"
        leftContent={
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" className="h-8 w-8 shrink-0 items-center justify-center rounded-full">
              <Package2 className="h-4 w-4" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <Search className="w-72" placeholder="Search products..." />
          </div>
        }
        rightContent={
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="shrink-0 md:flex h-8 w-8">
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* Content for each section will be added here */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        }
      />
      <div className="flex flex-1 overflow-hidden">
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
      </div>
    </div>
  )
} 