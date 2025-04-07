import type { Metadata } from 'next'

import { Header } from "@/components/header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComboTab } from "@/components/ui/combo-tabs"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { TickerCard } from "@/components/ui/ticker-card"

export const metadata: Metadata = {
  title: 'Dashboard Basic',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0 z-50"/>
      <div className="flex flex-1 overflow-hidden">
          <div id="content" className="mx-auto max-w-7xl px-7 py-6 w-full">
            <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
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