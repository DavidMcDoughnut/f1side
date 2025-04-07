'use client'

import { Header } from "@/components/header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { ComboTab } from "@/components/ui/combo-tabs"
import { MoreVertical } from "lucide-react"

export default function F1Page() {
  return (
    <div className="min-h-screen flex justify-center bg-page px-7">
      {/* decorative blueprint container */}
      <div id="blueprint" className="w-full flex justify-center relative">
        {/* Decorative columns */}
        <div className="absolute left-0 top-0 bottom-0 w-8 border-l border-r border-warn-scnd bg-[linear-gradient(-45deg,_transparent_49.5%,_var(--color-warn-scnd)_49.5%,_var(--color-warn-scnd)_50.5%,_transparent_50.5%)] bg-[size:16px_16px]" />
        <div className="absolute right-0 top-0 bottom-0 w-8 border-l border-r border-warn-scnd bg-[linear-gradient(-45deg,_transparent_49.5%,_var(--color-warn-scnd)_49.5%,_var(--color-warn-scnd)_50.5%,_transparent_50.5%)] bg-[size:16px_16px]" />
        
        {/* WIP Notice - 24px from left edge */}
        <div className="absolute top-6 left-20 h-[32px] flex items-center space-x-4 whitespace-nowrap rotate-90 origin-top-left">
          <ExclamationTriangleIcon className="w-5 h-5 text-warn" />
          <p className="font-medium text-xl text-warn tracking-wider">Under Construction</p>
          {/* <p className="text-xl text-warn-scnd font-light tracking-wide">3.31.25</p> */}
          {/* <p className="font-light text-xl text-warn-tert tracking-wide">Active work in progress</p> */}
          <ExclamationTriangleIcon className="w-5 h-5 text-warn" />
        </div>
        
        <div className="w-full max-w-7xl px-7 flex flex-col min-h-screen">
          <Header 
            variant="centered" 
            centerContent={
              <div className="flex space-x-4">
                <p className="font-semibold text-3xl text-prim tracking-wider">McDonut<span className="text-pos font-light">World</span></p>
                <div className="text-3xl text-strk-weak font-light">/</div>
                <p className="font-light text-3xl text-scnd tracking-wide">F1 Carbon</p>
                <div className="text-3xl text-strk-weak font-light">/</div>  
                <p className="font-light text-3xl text-warn tracking-wide">V1.0</p>
              </div>
            }
          />


          <main className="flex-1 py-6">
          <div className="w-full flex items-center gap-2 mb-12">
            {/* <p className="text-lg text-prim font-semibold tracking-wide">Stack</p> */}
            {/* <div className="text-lg text-invr font-light">/</div> */}
            <p className="text-lg text-pos font-normal italic tracking-wider">Updated 4.1.25</p>
            {/* <div className="text-lg text-invr font-light">/</div> */}
            <p className="text-lg text-tert font-light tracking-wider">Next.js, React, Tailwind, Shadcn/UI, TypeScript, Supabase, Vercel</p>
          </div>
          
         
           

          {/* Cards Section */}
          <div className="mb-12 w-full h-auto">
            <h1 className="text-2xl font-normal tracking-wider mb-4">CARD</h1>
            <Separator variant="weakalpha" className="mb-6" />

            <div className="grid grid-cols-2 gap-6 mb-6">
            {/* HeaderNavFull Example */}
            <Card variant="static" className="pt-0 pb-6 px-0">
              <Tabs defaultValue="tab1">
                <ComboTab variant="headerNavFull" size="base">
                  <ComboTab.Leading>
                    <Button variant="headerbtn" size="default">HEADERNAV FULL</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="base">
                    <TabsTrigger size="base" value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger size="base" value="tab2">Tab 2</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="icon">
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
            <Card variant="static" className="pt-0 pb-6 px-6">
              <Tabs defaultValue="tab1">
                <ComboTab variant="headerNav" size="base">
                  <ComboTab.Leading>
                    <Button variant="headerbtn" size="default">HEADERNAV</Button>
                  </ComboTab.Leading>
                  <ComboTab.Tabs size="base">
                    <TabsTrigger size="base" value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger size="base" value="tab2">Tab 2</TabsTrigger>
                  </ComboTab.Tabs>
                  <ComboTab.Actions>
                    <Button isIcon variant="ghost" size="default" className="icon">
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
            
            <div className="grid grid-cols-4 gap-6">
              <Card variant="static" className="">
                <CardHeader className="mb-4">
                  <CardTitle>STATIC</CardTitle>
                  <CardDescription>Default, no intxn</CardDescription>
                </CardHeader>
                <CardContent>
                  This is a static card that maintains its appearance.
                </CardContent>
              </Card>

              <Card variant="hover" className="">
                <CardHeader className="mb-4">
                  <CardTitle>HOVER</CardTitle>
                  <CardDescription>Hoverable, clickable</CardDescription>
                </CardHeader>
                <CardContent>
                  This card has hover interactions for better engagement.
                </CardContent>
              </Card>

              <Card variant="muted" className="">
                <CardHeader className="mb-4">
                  <CardTitle>MUTED / NAV</CardTitle>
                  <CardDescription>Nav, Widgets, Tooltips</CardDescription>
                </CardHeader>
                <CardContent>
                  This card uses muted colors for less visual emphasis.
                </CardContent>
              </Card>

              <Card variant="cta" className="">
                <CardHeader className="mb-4">
                  <CardTitle>CTA</CardTitle>
                  <CardDescription>Clickable, interactive</CardDescription>
                </CardHeader>
                <CardContent>
                  This card uses brand colors and hover effects to stand out.
                </CardContent>
                <CardFooter>
                  {/* <Button variant="brandfill" size="sm">Learn More</Button> */}
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Button Section */}
          <div className="mb-12 w-full h-auto">
            <h1 className="text-2xl font-light tracking-wider mb-4">BUTTON</h1>
            <Separator variant="weakalpha" className="mb-6" />
              {/* Button Sizes and States Row */}
              <div className="grid grid-cols-2 gap-6 w-full mb-6">
                <Card variant="static" className="">
                  <CardHeader className="mb-4">
                    <CardDescription>SIZES</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <Button variant="default" size="xl">Extra Large XL</Button>
                    <Button variant="default" size="lg">Large</Button>
                    <Button variant="default" size="default">Base</Button>
                    <Button variant="default" size="sm">Sm</Button>
                  </CardContent>
                </Card>

                <Card variant="static" className="">
                  <CardHeader className="mb-4">
                    <CardDescription>STATES</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="default" className="hover">Hover</Button>
                    <Button variant="default" className="active">Pressed</Button>
                    <Button variant="default" disabled>Disabled</Button>
                  </CardContent>
                </Card>
              </div>
            <div className="grid grid-cols-3 gap-6">
              <Card variant="static" className="">
                <CardHeader className="mb-4">
                  <CardDescription>CARD</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                  <Button variant="default">Base</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="filled">Filled</Button>
                  <Button variant="strong">Strong</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="dash">Dash</Button>
                  <Button variant="pos">Positive</Button>
                  <Button variant="neg">Negative</Button>
                  <Button variant="warn">Warning</Button>
                  <Button variant="brand">Brand</Button>
                  <Button variant="posfill">Positive Fill</Button>
                  <Button variant="negfill">Negative Fill</Button>
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button variant="brandfill">Brand Fill</Button>
                  {/* <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Link</Button> */}
                </CardContent>
              </Card>

              <Card variant="muted" className="">
                <CardHeader className="mb-4">
                  <CardDescription>MUTED / NAV</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                  <Button variant="default">Base</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="filled">Filled</Button>
                  <Button variant="strong">Strong</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="dash">Dash</Button>
                  <Button variant="pos">Positive</Button>
                  <Button variant="neg">Negative</Button>
                  <Button variant="warn">Warning</Button>
                  <Button variant="brand">Brand</Button>
                  <Button variant="posfill">Positive Fill</Button>
                  <Button variant="negfill">Negative Fill</Button>
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button variant="brandfill">Brand Fill</Button>
                  {/* <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Link</Button> */}
                </CardContent>
              </Card>

              <Card variant="outline" className="">
                <CardHeader className="mb-4">
                  <CardDescription>PAGE</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                  <Button variant="default">Base</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="filled">Filled</Button>
                  <Button variant="strong">Strong</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="dash">Dash</Button>
                  <Button variant="pos">Positive</Button>
                  <Button variant="neg">Negative</Button>
                  <Button variant="warn">Warning</Button>
                  <Button variant="brand">Brand</Button>
                  <Button variant="posfill">Positive Fill</Button>
                  <Button variant="negfill">Negative Fill</Button>
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button variant="brandfill">Brand Fill</Button>
                  {/* <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Link</Button> */}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-12 w-full h-auto">
            <div>
              {/* Basic Tab Row */}
              <div className="mb-6">
                <Tabs defaultValue="home" className="w-full">
                  <TabsList surface="page" size="xl">
                    <TabsTrigger value="home" size="xl">Tabs</TabsTrigger>
                    <TabsTrigger value="feed" size="xl">For You</TabsTrigger>
                    <TabsTrigger value="assets" size="xl">Following</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Surface Card Examples */}
              <div className="mb-6">
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
                        <div className="text-quat">CARD</div>
                      </TabsContent>
                      <TabsContent value="tab2">
                        <div className="text-quat">CARD</div>
                      </TabsContent>
                      <TabsContent value="tab3">
                        <div className="text-quat">CARD</div>
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
                        <div className="text-quat">NAV</div>
                      </TabsContent>
                      <TabsContent value="tab2">
                        <div className="text-quat">NAV</div>
                      </TabsContent>
                      <TabsContent value="tab3">
                        <div className="text-quat">NAV</div>
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
                        <div className="text-quat">PAGE</div>
                      </TabsContent>
                      <TabsContent value="tab2">
                        <div className="text-quat">PAGE</div>
                      </TabsContent>
                      <TabsContent value="tab3">
                        <div className="text-quat">PAGE</div>
                      </TabsContent>
                    </Tabs>
                  </Card>
                </div>
              </div>

              {/* Size Variants */}
              <div className="mb-12">
                <div className="grid grid-cols-4 gap-6">
                  {/* Small */}
                  <Card variant="static" className="p-6">
                    <Tabs defaultValue="tab1" className="w-full mb-4">
                      <TabsList size="sm">
                        <TabsTrigger value="tab1" size="sm">Small</TabsTrigger>
                        <TabsTrigger value="tab2" size="sm">Small 2</TabsTrigger>
                        <TabsTrigger value="tab3" size="sm">Small 3</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </Card>

                  {/* Base */}
                  <Card variant="static" className="p-6">
                    <Tabs defaultValue="tab1" className="w-full mb-4">
                      <TabsList size="base">
                        <TabsTrigger value="tab1" size="base">Base</TabsTrigger>
                        <TabsTrigger value="tab2" size="base">Base 2</TabsTrigger>
                        <TabsTrigger value="tab3" size="base">Base 3</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </Card>

                  {/* Large */}
                  <Card variant="static" className="p-6">
                    <Tabs defaultValue="tab1" className="w-full mb-4">
                      <TabsList size="lg">
                        <TabsTrigger value="tab1" size="lg">Large</TabsTrigger>
                        <TabsTrigger value="tab2" size="lg">Lg 2</TabsTrigger>
                        <TabsTrigger value="tab3" size="lg">Lg 3</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </Card>

                  {/* Extra Large */}
                  <Card variant="static" className="p-6">
                    <Tabs defaultValue="tab1" className="w-full mb-4">
                      <TabsList size="xl">
                        <TabsTrigger value="tab1" size="xl">Extra Large</TabsTrigger>
                        <TabsTrigger value="tab2" size="xl">XL 2</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </Card>
                </div>
              </div>
            </div>
          </div>



          {/* Stroke Section */}
          <div className="mb-12 w-full h-auto">
            <h1 className="text-2xl font-light tracking-wider mb-4">DIVIDER</h1>
            <Separator variant="weakalpha" className="mb-6" />
            
            <div className="grid grid-cols-3 gap-6">
              <Card variant="static" className="">
                <CardHeader className="mb-4">
                  <CardDescription>CARD</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 pb-4">
                  <Separator variant="weak" />
                  <Separator variant="weakmid" />
                  <Separator variant="weakalpha" />
                  <Separator variant="strongalpha" />
                  <Separator variant="strongmid" />
                  <Separator variant="strong" />
                </CardContent>
              </Card>

              <Card variant="muted" className="">
                <CardHeader className="mb-4">
                  <CardDescription>Muted / Nav</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <Separator variant="weak" />
                  <Separator variant="weakmid" />
                  <Separator variant="weakalpha" />
                  <Separator variant="strongalpha" />
                  <Separator variant="strongmid" />
                  <Separator variant="strong"/>
                </CardContent>
              </Card>

              <Card variant="outline" className="">
                <CardHeader className="mb-4">
                  <CardDescription>Page</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 ">
                  <Separator variant="weak" />
                  <Separator variant="weakmid" />
                  <Separator variant="weakalpha" />
                  <Separator variant="strongalpha" />
                  <Separator variant="strongmid" />
                  <Separator variant="strong" />
                </CardContent>
              </Card>
            </div>
          </div>





          </main>
        </div>
      </div>
    </div>
  )
} 