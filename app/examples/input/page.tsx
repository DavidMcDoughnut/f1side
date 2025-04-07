import type { Metadata } from 'next';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SearchInput } from '@/components/ui/search-input'
import { Card } from "@/components/ui/card";
import { SearchIcon, FilterIcon } from "lucide-react";

export const metadata: Metadata = {
  title: 'Input',
};

export default function InputPage() {
  return (


    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-light tracking-wider mb-4">INPUT</h1>
          <Separator variant="weakalpha" className="mb-6" />
        </div>

        {/* Default Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Default</h2>
          <Input type="email" placeholder="Email" />
        </div>

        {/* Disabled Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Disabled</h2>
          <Input type="email" placeholder="Email" disabled />
        </div>

        {/* With Label Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">With Label</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-label">Email</Label>
            <Input type="email" id="email-label" placeholder="Email" />
          </div>
        </div>

        {/* With Button Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">With Button</h2>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>

        {/* File Input Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">File Input</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>

        {/* Search Input Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Search Input</h2>
          <SearchInput placeholder="Search..." />
        </div>

      </div>
    </div>
  )
} 