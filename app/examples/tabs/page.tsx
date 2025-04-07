import type { Metadata } from 'next';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ComboTab } from "@/components/ui/combo-tabs"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export const metadata: Metadata = {
  title: 'Tabs',
};

export default function TabsDemo() {
  return (
    <div className="container mx-auto pt-12 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold text-4xl text-prim tracking-wider">Tabs<span className="text-pos font-light"> Demo</span></h1>
        </div>
        <Separator variant="weakalpha" className="mb-12" />

        {/* Basic Tab Row */}
        <div className="mb-12">
            <Tabs defaultValue="home" className="w-full">
                <TabsList surface="page" size="xl">
                    <TabsTrigger value="home" size="xl">For You</TabsTrigger>
                    <TabsTrigger value="feed" size="xl">Following</TabsTrigger>
                    <TabsTrigger value="assets" size="xl">New</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>

        {/* Surface Card Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Tab Surface Examples</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Static Card */}
            <Card variant="static" className="pt-2">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="group mb-12" surface="card">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <div className="text-scnd">Static card tab content.</div>
                </TabsContent>
                <TabsContent value="tab2">
                  <div className="text-scnd">Static card tab content.</div>
                </TabsContent>
                <TabsContent value="tab3">
                  <div className="text-scnd">Static card tab content.</div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Muted Card */}
            <Card variant="muted" className="pt-2">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="group mb-12" surface="nav">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <div className="text-scnd">Muted card tab content.</div>
                </TabsContent>
                <TabsContent value="tab2">
                  <div className="text-scnd">Muted card tab content.</div>
                </TabsContent>
                <TabsContent value="tab3">
                  <div className="text-scnd">Muted card tab content.</div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Page Card */}
            <Card variant="page" className="pt-2">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="group mb-12" surface="page">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <div className="text-scnd">Page card tab content.</div>
                </TabsContent>
                <TabsContent value="tab2">
                  <div className="text-scnd">Page card tab content.</div>
                </TabsContent>
                <TabsContent value="tab3">
                  <div className="text-scnd">Page card tab content.</div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>


        {/* Size Variants */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Size Variants</h2>
          <div className="grid grid-cols-4 gap-6">
            {/* Small */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="sm">
                  <TabsTrigger value="tab1" size="sm">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="sm">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="sm">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
              <h3 className="text-sm font-medium text-scnd">Small - sm</h3>
            </Card>

            {/* Base */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="base">
                  <TabsTrigger value="tab1" size="base">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="base">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="base">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
              <h3 className="text-sm font-medium text-scnd">Base - base</h3>
            </Card>

            {/* Large */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="lg">
                  <TabsTrigger value="tab1" size="lg">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="lg">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="lg">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
              <h3 className="text-sm font-medium text-scnd">Large - lg</h3>
            </Card>

            {/* Extra Large */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="xl">
                  <TabsTrigger value="tab1" size="xl">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="xl">Tab 2</TabsTrigger>

                </TabsList>
              </Tabs>
              <h3 className="text-sm font-medium text-scnd">Extra Large - xl</h3>
            </Card>
          </div>
        </div>

        {/* Size Variants */}
        <div className="mb-12 rounded-lg outline outline-warn-scnd outline-offset-20">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Size Variants</h2>
          <div className="grid grid-cols-4  gap-6">
            {/* Small */}
          <div className="w-full p-4">
            <div className="flex gap-4 h-auto align-bottom">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="sm">
                  <TabsTrigger value="tab1" size="sm">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="sm">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="sm">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="w-full p-4">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="base">
                  <TabsTrigger value="tab1" size="base">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="base">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="base">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
          </div>

          <div className="w-full p-4">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="lg">
                  <TabsTrigger value="tab1" size="lg">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="lg">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="lg">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
          </div>

          <div className="w-full p-4">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="xl">
                  <TabsTrigger value="tab1" size="xl">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="xl">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="xl">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
          </div>
          </div>
        </div>  

                {/* Size Variants */}
                <div className="mb-12 rounded-lg outline outline-warn-scnd outline-offset-20">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Size Variants</h2>
          <div className="grid grid-cols-2  gap-6">
            {/* Small */}
          <div className="w-full p-4">
            <div className="flex gap-4 h-auto align-bottom">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="sm">
                  <TabsTrigger value="tab1" size="xl">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="lg">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="base">Tab 3</TabsTrigger>
                  <TabsTrigger value="tab3" size="sm">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex gap-4 h-auto align-bottom">
              <Tabs defaultValue="tab1" className="w-full mb-4">
                <TabsList size="sm">
                  <TabsTrigger value="tab1" size="sm">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" size="base">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" size="lg">Tab 3</TabsTrigger>
                  <TabsTrigger value="tab3" size="xl">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          </div>
        </div>        


        {/* Tabs with Icons */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Tabs with Icons</h2>
          <Card variant="static" className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Analytics
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="text-scnd">
                  Get a high-level view of your project's performance.
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div className="text-scnd">
                  Dive deep into your metrics and analytics data.
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        

        {/* Tabs with Badges */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Tabs with Badges</h2>
          <Card variant="static" className="p-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="relative border-b border-strk-weakalpha">
                <TabsTrigger 
                  value="all"
                  className="relative data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1.5px] data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-brand data-[state=active]:after:rounded-full data-[state=active]:before:absolute data-[state=active]:before:left-[-8px] data-[state=active]:before:right-[-8px] data-[state=active]:before:bottom-[-1.5px] data-[state=active]:before:h-[2px] data-[state=active]:before:bg-card data-[state=active]:before:rounded-full"
                >
                  All
                  <span className="ml-2 rounded-full bg-ui-base-strong px-2 py-0.5 text-xs">
                    24
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="unread"
                  className="relative data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1.5px] data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-brand data-[state=active]:after:rounded-full data-[state=active]:before:absolute data-[state=active]:before:left-[-8px] data-[state=active]:before:right-[-8px] data-[state=active]:before:bottom-[-1.5px] data-[state=active]:before:h-[2px] data-[state=active]:before:bg-card data-[state=active]:before:rounded-full"
                >
                  Unread
                  <span className="ml-2 rounded-full bg-ui-pos-weak px-2 py-0.5 text-xs text-pos">
                    12
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="archived"
                  className="relative data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1.5px] data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-brand data-[state=active]:after:rounded-full data-[state=active]:before:absolute data-[state=active]:before:left-[-8px] data-[state=active]:before:right-[-8px] data-[state=active]:before:bottom-[-1.5px] data-[state=active]:before:h-[2px] data-[state=active]:before:bg-card data-[state=active]:before:rounded-full"
                >
                  Archived
                  <span className="ml-2 rounded-full bg-ui-base-strong px-2 py-0.5 text-xs">
                    8
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="text-scnd">
                  Showing all messages in your inbox.
                </div>
              </TabsContent>
              <TabsContent value="unread">
                <div className="text-scnd">
                  Showing only unread messages.
                </div>
              </TabsContent>
              <TabsContent value="archived">
                <div className="text-scnd">
                  Showing your archived messages.
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>


        {/* Basic Tabs */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Basic Tabs</h2>
          <Card variant="static" className="p-6">
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="text-scnd">
                  Make changes to your account here. Click save when you're done.
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="text-scnd">
                  Change your password here. After saving, you'll be logged out.
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div className="text-scnd">
                  Manage your notification and privacy settings here.
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        
        {/* Header Nav ComboTabs David Tests */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">Header Nav ComboTabs David Tests</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Full width with padding */}
            <Card variant="static" className="pt-1 px-0">
              <Tabs defaultValue="tab1">
                <ComboTab withPadding size="base" className="px-3">
                  <ComboTab.Leading>
                    <Button variant="ghost" size="default" className="font-medium tracking-wider text-prim ">SNAPSHOT</Button>
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
                  <div className="bg-menu rounded-sm py-6 h-40">
                    {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                  </div>
                </div>
              </Tabs>
            </Card>

            {/* JustifiedNo Padding */}
            <Card variant="ghost" className="pt-1 px-6">
              <Tabs defaultValue="tab1">
                <ComboTab size="base">
                  <ComboTab.Leading className="-ml-3">
                    <Button variant="ghost" size="default" className="font-medium tracking-wide text-prim">SNAPSHOT</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="base">
                    <TabsTrigger size="base" value="tab1">Macro</TabsTrigger>
                    <TabsTrigger size="base" value="tab2">Portfolio</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions className="-mr-3">
                    <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
                <div className="bg-menu py-6 mt-6 rounded-sm h-40">
                  {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                </div>
              </Tabs>
            </Card>
          </div>
        </div>

        {/* New Header Nav Component Variants */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">New Header Nav New Component Variants</h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* HeaderNavFull Example */}
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
                  <div className="bg-menu rounded-sm py-6 h-40">
                    {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                  </div>
                </div>
              </Tabs>
            </Card>

            {/* HeaderNav Example */}
            <Card variant="ghost" className="pt-0 pb-6 px-6">
              <Tabs defaultValue="tab1">
                <ComboTab variant="headerNav" size="base">
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
                <div className="bg-menu py-6 mt-6 rounded-sm h-40">
                  {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                </div>
              </Tabs>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* HeaderNavstatic Example */}
            <Card variant="static" className="pt-0 pb-6 px-0">
              <Tabs defaultValue="tab1">
                <ComboTab variant="headerNavStatic" size="base">
                  <ComboTab.Leading>
                    <span>SNAPSHOT</span>
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
                  <div className="bg-menu rounded-sm py-6 h-40">
                    {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                  </div>
                </div>
              </Tabs>
            </Card>

            {/* HeaderNav Example */}
            <Card variant="ghost" className="pt-0 pb-6 px-6">
              <Tabs defaultValue="tab1">
                <ComboTab variant="headerNavStaticFull" size="base">
                  <ComboTab.Leading>
                    <span>SNAPSHOT</span>
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
                <div className="bg-menu py-6 mt-6 rounded-sm h-40">
                  {/* <p className="text-tert">Content placeholder for tab panel</p> */}
                </div>
              </Tabs>
            </Card>
          </div>
        </div>

        {/* ComboTab Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">ComboTab Examples</h2>

          {/* Without Padding */}
          <Card variant="static" className="mb-6">
            <div className="p-6">
              <h3 className="text-sm font-medium text-scnd mb-4">Without Padding</h3>
              <Tabs defaultValue="tab1">
                <ComboTab>
                  <ComboTab.Leading>
                    <Button variant="ghost" className="tracking-wide">OVERVIEW</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs>
                    <TabsTrigger value="tab1">Details</TabsTrigger>
                    <TabsTrigger value="tab2">Activity</TabsTrigger>
                    <TabsTrigger value="tab3">Settings</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-4 w-4">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </div>
          </Card>


          {/* Without Padding */}
          <Card variant="static" className="mb-6">
            <div className="p-6">
              <h3 className="text-sm font-medium text-scnd mb-4">Without Padding</h3>
              <Tabs defaultValue="tab1">
                <ComboTab>
                  <ComboTab.Leading>
                    <Button variant="ghost" className="">Overview</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs>
                    <TabsTrigger value="tab1">Details</TabsTrigger>
                    <TabsTrigger value="tab2">Activity</TabsTrigger>
                    <TabsTrigger value="tab3">Settings</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-4 w-4">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </div>
          </Card>

          {/* With Padding */}
          <Card variant="static" className="mb-6">
            <div className="p-6">
              <h3 className="text-sm font-medium text-scnd mb-4">With Padding</h3>
              <Tabs defaultValue="tab1">
                <ComboTab withPadding>
                  <ComboTab.Leading>
                    <Button variant="ghost" className="">Overview</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs>
                    <TabsTrigger value="tab1">Details</TabsTrigger>
                    <TabsTrigger value="tab2">Activity</TabsTrigger>
                    <TabsTrigger value="tab3">Settings</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-4 w-4">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </div>
          </Card>

          {/* Size Variants */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Small */}
            <Card variant="static" className="pt-1 px-0">
              <Tabs defaultValue="tab1">
                <ComboTab withPadding size="base" className="px-3">
                  <ComboTab.Leading>
                    <Button variant="ghost" size="default" className="font-medium tracking-wider text-prim ">SNAPSHOT</Button>
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
                  <div className="bg-menu rounded-sm py-6">
                    <p className="text-tert">Content placeholder for tab panel</p>
                  </div>
                  
                </div>
              </Tabs>
            </Card>

            {/* Large */}
            <Card variant="static" className="pt-1 px-6">
              <Tabs defaultValue="tab1">
                <ComboTab size="base">
                  <ComboTab.Leading>
                    <Button variant="ghost" size="default" className="font-medium tracking-wide text-prim">SNAPSHOT</Button>
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
                <div className="bg-menu py-6 mt-6 rounded-sm">
                  <p className="text-tert">Content placeholder for tab panel</p>
                </div>
              </Tabs>
            </Card>
          </div>

                    {/* Size Variants */}
                    <div className="grid grid-cols-2 gap-6">
            {/* Small */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1">
                <ComboTab size="sm">
                  <ComboTab.Leading>
                    <Button variant="ghost" size="sm" className="px-0">Small</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="sm">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </Card>

            {/* Large */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1">
                <ComboTab size="lg">
                  <ComboTab.Leading>
                    <Button variant="ghost" size="lg" className="px-0">Large</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="lg">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </Card>
          </div>

          {/* Mixed Size Variants */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            {/* Large Leading with Base Tabs */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1">
                <ComboTab>
                  <ComboTab.Leading>
                  <Button variant="ghost" size="xl" className="text-prim font-normal tracking-wide py-0">Large</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="base">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </Card>

            {/* Extra Large Leading with Base Tabs */}
            <Card variant="static" className="p-6">
              <Tabs defaultValue="tab1">
                <ComboTab>
                  <ComboTab.Leading>
                    <span className="text-3xl font-medium tracking-wider tracking-wide">NVDA</span>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="base">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="h-7 w-7">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </ComboTab.Actions>
                </ComboTab>
              </Tabs>
            </Card>
          </div>
        </div>

        {/* ComboTab Leading Styles */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal tracking-wide mb-4">ComboTab Leading Styles</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Text Variants */}
            <Card variant="static" className="p-6">
              <h3 className="text-sm font-medium text-scnd mb-4">Text Variants</h3>
              <div className="space-y-6">
                {/* Regular Text */}
                <Tabs defaultValue="tab1">
                  <ComboTab>
                    <ComboTab.Leading>
                      <span className="text-prim">Regular Text</span>
                    </ComboTab.Leading>
                    <ComboTab.Tabs>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </ComboTab.Tabs>
                  </ComboTab>
                </Tabs>

                {/* Styled Text */}
                <Tabs defaultValue="tab1">
                  <ComboTab>
                    <ComboTab.Leading>
                      <span className="font-semibold text-brand tracking-wide">Styled Text</span>
                    </ComboTab.Leading>
                    <ComboTab.Tabs>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </ComboTab.Tabs>
                  </ComboTab>
                </Tabs>

                {/* Heading Text */}
                <Tabs defaultValue="tab1">
                  <ComboTab>
                    <ComboTab.Leading>
                      <h3 className="font-light text-scnd tracking-wider">Heading Style</h3>
                    </ComboTab.Leading>
                    <ComboTab.Tabs>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </ComboTab.Tabs>
                  </ComboTab>
                </Tabs>
              </div>
            </Card>

            {/* Button Variants */}
            <Card variant="static" className="p-6">
              <h3 className="text-sm font-medium text-scnd mb-4">Button Variants</h3>
              <div className="space-y-6">
                {/* Ghost Button */}
                <Tabs defaultValue="tab1">
                  <ComboTab>
                    <ComboTab.Leading>
                      <Button variant="ghost" className="px-0">Ghost Button</Button>
                    </ComboTab.Leading>
                    <ComboTab.Tabs>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </ComboTab.Tabs>
                  </ComboTab>
                </Tabs>

                {/* Styled Ghost Button */}
                <Tabs defaultValue="tab1">
                  <ComboTab>
                    <ComboTab.Leading>
                      <Button 
                        variant="ghost" 
                        className="px-0 font-semibold text-brand tracking-wide"
                      >
                        Styled Button
                      </Button>
                    </ComboTab.Leading>
                    <ComboTab.Tabs>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </ComboTab.Tabs>
                  </ComboTab>
                </Tabs>

                {/* Button with Icon */}
                <Tabs defaultValue="tab1">
                  <ComboTab>
                    <ComboTab.Leading>
                      <Button variant="ghost" className="px-0 text-pos">
                        <svg 
                          className="mr-2 h-4 w-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        With Icon
                      </Button>
                    </ComboTab.Leading>
                    <ComboTab.Tabs>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </ComboTab.Tabs>
                  </ComboTab>
                </Tabs>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 