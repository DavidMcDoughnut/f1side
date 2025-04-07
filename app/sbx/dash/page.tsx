import type { Metadata } from 'next'

import { Header } from "@/components/header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComboTab } from "@/components/ui/combo-tabs"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { TickerCard } from "@/components/ui/ticker-card"

export const metadata: Metadata = {
  title: 'Sidebar Left',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0 z-50" />
      <div className="flex flex-1 overflow-hidden">
          <div id="content" className="mx-auto max-w-7xl px-7 py-6 w-full">
            <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
              <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-2">
                <TickerCard
                  variant="down"
                  symbolTicker="S&P500"
                  symbolName="5,066.08"
                  priceChange="$1,203, 6.02%"
                  priceValue=""
                  priceChangeClassName="px-0"
                />
                <TickerCard
                  variant="down"
                  symbolTicker="DOW"
                  symbolName="38,314.86"
                  priceChange="$2,231.86, 5.52%"
                  priceValue=""
                  priceChangeClassName="px-0"
                />
                <TickerCard
                  variant="down"
                  symbolTicker="NASDAQ"
                  symbolName="17,420.69"
                  priceChange="$1,123.69, 6.02%"
                  priceValue=""
                  priceChangeClassName="px-0"
                />
                <TickerCard
                  variant="up"
                  symbolTicker="YOU"
                  symbolName="$2.2m"
                  priceChange="$66,4k, 2.22%"
                  priceValue=""
                  priceChangeClassName="px-0"
                />
              </div>
              
              {/* MARKET SUMMARY - Wrapped in a section div */}
              <div className="section flex flex-col gap-4">
                <div className="w-full">
                  <h1 className="text-2xl text-prim font-normal tracking-wider">Markets are <span className="text-pos font-medium">up</span></h1>
                  {/* <Separator variant="weakalpha" className="mb-1" /> */}
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                  <Card variant="static" className="pt-0 pb-6 px-0">
                    <Tabs defaultValue="tab1">
                      <ComboTab variant="headerNavFull" size="base">
                        <ComboTab.Leading>
                          <Button variant="headertitle" size="default">SNAPSHOT</Button>
                        </ComboTab.Leading>
                        <ComboTab.Tabs size="base">
                          <TabsTrigger size="base" value="tab1">Macro</TabsTrigger>
                          <TabsTrigger size="base" value="tab2">Portfolio</TabsTrigger>
                        </ComboTab.Tabs>
                        <ComboTab.Actions>
                          <Button variant="ghost" size="default" className="icon">
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
                          <Button variant="headertitle" size="default">INDEXES</Button>
                        </ComboTab.Leading>
                        <ComboTab.Tabs size="base">
                          <TabsTrigger size="base" value="tab1">Performance</TabsTrigger>
                          <TabsTrigger size="base" value="tab2">Net Flow</TabsTrigger>
                        </ComboTab.Tabs>
                        <ComboTab.Actions>
                          <Button variant="ghost" size="default" className="icon">
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
                          <Button variant="headertitle" size="default">NEWS</Button>
                        </ComboTab.Leading>
                        <ComboTab.Tabs size="base">
                          <TabsTrigger size="base" value="tab1">Macro</TabsTrigger>
                          <TabsTrigger size="base" value="tab2">Portfolio</TabsTrigger>
                          <TabsTrigger size="base" value="tab2">Hot</TabsTrigger>
                          <TabsTrigger size="base" value="tab2">New</TabsTrigger>
                        </ComboTab.Tabs>
                        <ComboTab.Actions>
                          <Button variant="ghost" size="default" className="icon">
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
              </div> {/* End of section div */}



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
                        <Button variant="headertitle" size="default">SENTIMENT</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Overall</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Assets</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Sectors</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Geos</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button variant="ghost" size="default" className="icon">
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
                        <Button variant="headertitle" size="default">TRADE ACTIVITY</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button variant="ghost" size="default" className="icon">
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
              <div className="grid auto-rows-min gap-4 md:grid-cols-3 pb-12">
                <Card variant="static" className="pt-0 pb-6 px-0">
                  <Tabs defaultValue="tab1">
                    <ComboTab variant="headerNavFull" size="base">
                      <ComboTab.Leading>
                        <Button variant="headertitle" size="default">GAINERS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button variant="ghost" size="default" className="icon">
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
                        <Button variant="headertitle" size="default">LOSERS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button variant="ghost" size="default" className="icon">
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
                        <Button variant="headertitle" size="default">MOVERS</Button>
                      </ComboTab.Leading>
                      <ComboTab.Tabs size="base">
                        <TabsTrigger size="base" value="tab1">Stocks</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">Options</TabsTrigger>
                        <TabsTrigger size="base" value="tab2">ETFs</TabsTrigger>
                      </ComboTab.Tabs>
                      <ComboTab.Actions>
                        <Button variant="ghost" size="default" className="icon">
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
              
            </div>
          </div>
      </div>
    </div>
  )
} 