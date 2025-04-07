import type { Metadata } from 'next';
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LayoutGrid } from "lucide-react";

export const metadata: Metadata = {
  title: 'Button',
};

export default function ButtonExamplesPage() {
  return (
    <div className="container mx-auto pt-12 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 mb-4">
            <p className="font-semibold text-4xl text-prim tracking-wider">McDonut<span className="text-pos font-light">World</span></p><div className="text-4xl text-invr font-light">/</div>
            <p className="font-light text-4xl text-scnd tracking-wide">F1 Carbon</p><div className="text-4xl text-invr font-light">/</div>
            <p className="font-light text-4xl text-disb tracking-wide">Button</p>
          </div>
        </div>
        <Separator variant="weakalpha" className="mb-4" />

        {/* Regular Button Section */}
        <div className="mb-12 w-full h-auto">
          <h1 className="text-2xl font-normal tracking-wide mb-4">BUTTON</h1>
          <Separator variant="weakalpha" className="mb-6" />
            {/* Button Sizes and States Row */}
            <div className="grid grid-cols-3 gap-6 w-full mb-6">
              <Card variant="static" className="">
                <CardHeader className="mb-4">
                  <CardDescription>SIZES</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                  <Button variant="default" size="sm">Sm</Button>
                  <Button variant="default" size="default">Default</Button>
                  <Button variant="default" size="lg">Large</Button>
                  <Button variant="default" size="xl">Extra Large</Button>
                </CardContent>
              </Card>

              <Card variant="static" className="">
              <CardHeader className="mb-4">
                <CardDescription>CONTENT</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-start gap-4">
              <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="sm">Small</Button>
                  <Button isIcon variant="default" size="sm"><LayoutGrid /></Button>
                  <Button variant="default" size="sm"><LayoutGrid className="" />Small</Button>
                </div>

                <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="default">Default</Button>
                  <Button isIcon variant="default" size="default"><LayoutGrid /></Button>
                  <Button variant="default" size="default"><LayoutGrid className="size-4" />Default</Button>
                </div>

                <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="lg">Large</Button>
                  <Button isIcon variant="default" size="lg"><LayoutGrid /></Button>
                  <Button variant="default" size="lg"><LayoutGrid className="size-5" />Large</Button>  
                </div>

                <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="xl">Extra Large</Button>
                  <Button isIcon variant="default" size="xl"><LayoutGrid /></Button>
                  <Button variant="default" size="xl"><LayoutGrid className="size-6" />XL</Button>
                </div>
                
              </CardContent>
            </Card>

              <Card variant="static" className="">
                <CardHeader className="mb-4">
                  <CardDescription>STATES</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="default" className="hover">Hover</Button>
                  <Button variant="default" className="active">Pressed</Button>
                  <Button variant="default" disabled>Disabled</Button>
                </CardContent>
              </Card>
            </div>

          {/* Button Variants Grid */}
          <div className="grid grid-cols-3 gap-6">
            <Card variant="static" className="">
              <CardHeader className="mb-4">
                <CardDescription>CARD</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Button variant="default">Base</Button>
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="outline">Outline</Button>
                  <Button isIcon variant="outline"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="filled">Filled</Button>
                  <Button isIcon variant="filled"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="strong">Strong</Button>
                  <Button isIcon variant="strong"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost">Ghost</Button>
                  <Button isIcon variant="ghost"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="dash">Dash</Button>
                  <Button isIcon variant="dash"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="pos">Positive</Button>
                  <Button isIcon variant="pos"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="neg">Negative</Button>
                  <Button isIcon variant="neg"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warn">Warning</Button>
                  <Button isIcon variant="warn"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brand">Brand</Button>
                  <Button isIcon variant="brand"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="posfill">Positive Fill</Button>
                  <Button isIcon variant="posfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="negfill">Negative Fill</Button>
                  <Button isIcon variant="negfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button isIcon variant="warnfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brandfill">Brand Fill</Button>
                  <Button isIcon variant="brandfill"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="muted" className="">
              <CardHeader className="mb-4">
                <CardDescription>MUTED / NAV</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Button variant="default">Base</Button>
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="outline">Outline</Button>
                  <Button isIcon variant="outline"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="filled">Filled</Button>
                  <Button isIcon variant="filled"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="strong">Strong</Button>
                  <Button isIcon variant="strong"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost">Ghost</Button>
                  <Button isIcon variant="ghost"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="dash">Dash</Button>
                  <Button isIcon variant="dash"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="pos">Positive</Button>
                  <Button isIcon variant="pos"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="neg">Negative</Button>
                  <Button isIcon variant="neg"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warn">Warning</Button>
                  <Button isIcon variant="warn"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brand">Brand</Button>
                  <Button isIcon variant="brand"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="posfill">Positive Fill</Button>
                  <Button isIcon variant="posfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="negfill">Negative Fill</Button>
                  <Button isIcon variant="negfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button isIcon variant="warnfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brandfill">Brand Fill</Button>
                  <Button isIcon variant="brandfill"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" className="">
              <CardHeader className="mb-4">
                <CardDescription>PAGE</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Button variant="default">Base</Button>
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="outline">Outline</Button>
                  <Button isIcon variant="outline"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="filled">Filled</Button>
                  <Button isIcon variant="filled"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="strong">Strong</Button>
                  <Button isIcon variant="strong"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost">Ghost</Button>
                  <Button isIcon variant="ghost"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="dash">Dash</Button>
                  <Button isIcon variant="dash"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="pos">Positive</Button>
                  <Button isIcon variant="pos"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="neg">Negative</Button>
                  <Button isIcon variant="neg"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warn">Warning</Button>
                  <Button isIcon variant="warn"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brand">Brand</Button>
                  <Button isIcon variant="brand"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="posfill">Positive Fill</Button>
                  <Button isIcon variant="posfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="negfill">Negative Fill</Button>
                  <Button isIcon variant="negfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button isIcon variant="warnfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brandfill">Brand Fill</Button>
                  <Button isIcon variant="brandfill"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Icon Button Section */}
        <div className="mb-12 w-full h-auto">
          <h1 className="text-2xl font-normal tracking-wide mb-4">ICON BUTTON</h1>
          <Separator variant="weakalpha" className="mb-6" />
          
          {/* Icon Button Sizes Row */}
          <div className="grid grid-cols-2 gap-6 w-full mb-6">
            <Card variant="static" className="">
              <CardHeader className="mb-4">
                <CardDescription>ICON SIZES</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Button isIcon variant="default" size="xl">
                  <LayoutGrid className="size-6" />
                </Button>
                <Button isIcon variant="default" size="lg">
                  <LayoutGrid className="size-5" />
                </Button>
                <Button isIcon variant="default" size="default">
                  <LayoutGrid className="size-4" />
                </Button>
                <Button isIcon variant="default" size="sm">
                  <LayoutGrid className="size-3.5" />
                </Button>
              </CardContent>
            </Card>

            <Card variant="static" className="">
              <CardHeader className="mb-4">
                <CardDescription>ICON + TEXT</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Button variant="default" size="xl">
                  <LayoutGrid className="size-6" />
                  Extra Large
                </Button>
                <Button variant="default" size="lg">
                  <LayoutGrid className="size-5" />
                  Large
                </Button>
                <Button variant="default" size="default">
                  <LayoutGrid className="size-4" />
                  Base
                </Button>
                <Button variant="default" size="sm">
                  <LayoutGrid className="size-3.5" />
                  Small
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Icon Button Variants compared to text button variants with different levels of explicitness*/}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <Card variant="static" className="">
              <CardHeader className="mb-4">
                <CardDescription>CARD</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-start gap-4">
              <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="sm">Small</Button>
                  <Button isIcon variant="default" size="sm"><LayoutGrid /></Button>
                  <Button variant="default" size="sm"><LayoutGrid className="" />Small</Button>

                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="default">Base (md)</Button>
                  <Button isIcon variant="default" size="default"><LayoutGrid /></Button>
                  <Button variant="default" size="default"><LayoutGrid className="size-4" />Base (md)</Button>

                  <Button>Base no variants</Button>
                  <Button><LayoutGrid />Base no variants</Button>
                  <Button isIcon><LayoutGrid /></Button>
                  
                </div>
                <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="lg">Large</Button>
                  <Button isIcon variant="default" size="lg"><LayoutGrid /></Button>
                  <Button variant="default" size="lg"><LayoutGrid className="size-5" />Large</Button>
                
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-start w-full gap-2">
                  <Button variant="default" size="xl">Extra Large</Button>
                  <Button isIcon variant="default" size="xl"><LayoutGrid /></Button>
                  <Button variant="default" size="xl"><LayoutGrid className="size-6" />Extra Large</Button>

                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Button Variants Grid */}
          <div className="grid grid-cols-3 gap-6">
            <Card variant="static" className="">
              <CardHeader className="mb-4">
                <CardDescription>CARD</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Button variant="default">Base</Button>
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                  <Button isIcon variant="default" size="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="outline">Outline</Button>
                  <Button isIcon variant="outline"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="filled">Filled</Button>
                  <Button isIcon variant="filled"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="strong">Strong</Button>
                  <Button isIcon variant="strong"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost">Ghost</Button>
                  <Button isIcon variant="ghost"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="dash">Dash</Button>
                  <Button isIcon variant="dash"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="pos">Positive</Button>
                  <Button isIcon variant="pos"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="neg">Negative</Button>
                  <Button isIcon variant="neg"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warn">Warning</Button>
                  <Button isIcon variant="warn"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brand">Brand</Button>
                  <Button isIcon variant="brand"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="posfill">Positive Fill</Button>
                  <Button isIcon variant="posfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="negfill">Negative Fill</Button>
                  <Button isIcon variant="negfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button isIcon variant="warnfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brandfill">Brand Fill</Button>
                  <Button isIcon variant="brandfill"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="muted" className="">
              <CardHeader className="mb-4">
                <CardDescription>MUTED / NAV</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Button variant="default">Base</Button>
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="outline">Outline</Button>
                  <Button isIcon variant="outline"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="filled">Filled</Button>
                  <Button isIcon variant="filled"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="strong">Strong</Button>
                  <Button isIcon variant="strong"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost">Ghost</Button>
                  <Button isIcon variant="ghost"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="dash">Dash</Button>
                  <Button isIcon variant="dash"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="pos">Positive</Button>
                  <Button isIcon variant="pos"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="neg">Negative</Button>
                  <Button isIcon variant="neg"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warn">Warning</Button>
                  <Button isIcon variant="warn"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brand">Brand</Button>
                  <Button isIcon variant="brand"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="posfill">Positive Fill</Button>
                  <Button isIcon variant="posfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="negfill">Negative Fill</Button>
                  <Button isIcon variant="negfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button isIcon variant="warnfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brandfill">Brand Fill</Button>
                  <Button isIcon variant="brandfill"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" className="">
              <CardHeader className="mb-4">
                <CardDescription>PAGE</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Button variant="default">Base</Button>
                  <Button isIcon variant="default"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="outline">Outline</Button>
                  <Button isIcon variant="outline"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="filled">Filled</Button>
                  <Button isIcon variant="filled"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="strong">Strong</Button>
                  <Button isIcon variant="strong"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost">Ghost</Button>
                  <Button isIcon variant="ghost"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="dash">Dash</Button>
                  <Button isIcon variant="dash"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="pos">Positive</Button>
                  <Button isIcon variant="pos"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="neg">Negative</Button>
                  <Button isIcon variant="neg"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warn">Warning</Button>
                  <Button isIcon variant="warn"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brand">Brand</Button>
                  <Button isIcon variant="brand"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="posfill">Positive Fill</Button>
                  <Button isIcon variant="posfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="negfill">Negative Fill</Button>
                  <Button isIcon variant="negfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="warnfill">Warning Fill</Button>
                  <Button isIcon variant="warnfill"><LayoutGrid /></Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button variant="brandfill">Brand Fill</Button>
                  <Button isIcon variant="brandfill"><LayoutGrid /></Button>
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>
    </div>
  );
} 