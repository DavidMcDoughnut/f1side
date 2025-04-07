import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function DesignSystemPage() {
  return (
    <>
      {/* Vertical WIP Elements */}
      <>
        {/* Diagonal stripes with gradient overlay - fixed to left edge */}
        <div className="fixed top-0 left-2 w-8 h-screen z-50">
          <div className="w-full h-full bg-[linear-gradient(-45deg,_transparent_49.5%,_var(--color-warn-tert)_49.5%,_var(--color-warn-tert)_50.5%,_transparent_50.5%)] bg-[size:16px_16px] border-r border-warn-tert">
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_left,transparent,var(--color-page))]">
          </div>
        </div>

        {/* WIP Notice - 24px from left edge */}
        <div className="fixed top-10 left-[84px] h-[32px] flex items-center space-x-4 whitespace-nowrap rotate-90 origin-top-left z-50">
          <ExclamationTriangleIcon className="w-5 h-5 text-warn" />
          <p className="font-semibold text-xl text-warn tracking-wider">WIP</p>
          {/* <p className="text-xl text-warn-scnd font-light tracking-wide">3.31.25</p> */}
          <p className="font-light text-xl text-warn-tert tracking-wide">Active work in progress</p>
        
          <ExclamationTriangleIcon className="w-5 h-5 text-warn" />
        </div>
      </>

      {/* Main Content */}
      <div className="container mx-auto pt-12 px-4">
        <div className="max-w-[1224px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 mb-4">
              <p className="font-semibold text-4xl text-prim tracking-wider">McDonut<span className="text-pos font-light">World</span></p><div className="text-4xl text-invr font-light">/</div>
              <p className="font-light text-4xl text-scnd tracking-wide">F1 Carbon</p><div className="text-4xl text-invr font-light">/</div>
              <p className="font-light text-4xl text-disb tracking-wide">Design System</p>
            </div>
          </div>
          <Separator variant="weakalpha" className="mb-4" />

          

          {/* Cards Section */}
          <div className="mb-12 w-full h-auto">
            <h1 className="text-2xl font-normal tracking-wide mb-4">CARD</h1>
            <Separator variant="weakalpha" className="mb-6" />
            
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
            <h1 className="text-2xl font-normal tracking-wide mb-4">BUTTON</h1>
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

          {/* Stroke Section */}
          <div className="mb-12 w-full h-auto">
            <h1 className="text-2xl font-normal tracking-wide mb-4">DIVIDER</h1>
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

          {/* Patterns Section */}
          <div className="mb-12 w-full h-auto">
            <h1 className="text-2xl font-normal tracking-wide mb-4">PATTERN</h1>
            <Separator variant="weakalpha" className="mb-6" />
            {/* Dot pattern */}
            <div className="w-full h-56 rounded-lg bg-[radial-gradient(circle,_var(--color-ui-base-weak)_2px,_transparent_2px)] bg-[size:24px_24px] mb-6">
            </div>
            
            {/* Diagonal stripes pattern */}
            <div className="w-full h-8 bg-[linear-gradient(-45deg,_transparent_49.5%,_var(--color-warn-tert)_49.5%,_var(--color-warn-tert)_50.5%,_transparent_50.5%)] bg-[size:16px_16px] border-t border-b border-warn-tert">
            </div>
          </div>

          {/* Future content will go here */}
        </div>
      </div>
    </>
  );
} 