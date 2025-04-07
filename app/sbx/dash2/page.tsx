import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComboTab } from "@/components/ui/combo-tabs"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: 'WIP Left Tall ',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0 z-50" />
      <div className="flex flex-1 overflow-hidden">
          <div id="content" className="mx-auto max-w-7xl px-7 py-6 w-full">
            <div className="flex flex-1 flex-col gap-4 ">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4 my-4">
                <Card variant="muted" className="py-2 h-fit">
                  <CardHeader className="py-0 space-y-0 gap-0">
                    <CardTitle className="text-base font-medium">NVDA</CardTitle>
                    <CardDescription className="text-sm text-tert">Nvidia</CardDescription>
                  </CardHeader>
                </Card>

                <Card variant="muted" className="h-fit py-2">
                  <CardHeader className="py-0 space-y-0 gap-0">
                    <CardTitle className="text-base font-normal">TSLA</CardTitle>
                    <CardDescription className="text-sm text-tert">Tesla</CardDescription>
                  </CardHeader>
                </Card>

                <Card variant="muted" className="h-fit py-2">
                  <CardHeader className="py-0 space-y-0 gap-0">
                    <CardTitle className="text-base font-normal">MSFT</CardTitle>
                    <CardDescription className="text-sm text-tert">Microsoft</CardDescription>
                  </CardHeader>
                </Card>

                <Card variant="muted" className="h-fit py-2 ">
                  <CardHeader className="py-0 space-y-0 gap-0 ">
                    <CardTitle className="text-base font-normal">GOOG</CardTitle>
                    <CardDescription className="text-sm text-tert">Google</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="w-full">
                <h1 className="text-2xl text-prim font-normal tracking-wider mb-1">Markets are <span className="text-pos font-medium">up</span></h1>
                {/* <Separator variant="weakalpha" className="mb-1" /> */}
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-2">
              <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">SNAPSHOT</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Macro</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Portfolio</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>

                <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">INDEXES</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Performance</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Net Flow</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-1">
                <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">NEWS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Macro</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Portfolio</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Hot</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">New</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>
                </div>

                {/* MARKET DATA */}

                <Tabs defaultValue="overview" className="w-full">
                <TabsList size="lg">
                  <TabsTrigger value="overview" size="lg">Markets</TabsTrigger>
                  <TabsTrigger value="analytics" size="lg">Retail</TabsTrigger>
                  <TabsTrigger value="reports" size="lg">Institutions</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* SENTIMENT */}
              <div className="grid auto-rows-min gap-4 md:grid-cols-2">
              <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">SENTIMENT</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Overall</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Assets</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Sectors</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Geos</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>

                <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">TRADE ACTIVITY</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">GAINERS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>

                <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">LOSERS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>

                <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headerbtn" size="default">MOVERS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </ComboTab.Actions>
                    </ComboTab>
                    <div className="px-6 mt-6">
                      <div className="bg-card rounded-sm py-6 h-40">
                        {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                      </div>
                    </div>
                  </Tabs>
                </Card>
              </div>
              <div className="min-h-[calc(100vh-16rem)] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 