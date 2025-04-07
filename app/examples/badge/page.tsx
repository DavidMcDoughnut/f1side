import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Badge',
};

export default function BadgePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-light tracking-wider mb-4">BADGE</h1>
          <Separator variant="weakalpha" className="mb-6" />
        </div>

        {/* Default Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Default Variants</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="filled">Filled</Badge>
              <Badge variant="strong">Strong</Badge>
              <Badge variant="pos">Positive</Badge>
              <Badge variant="neg">Negative</Badge>
              <Badge variant="warn">Warning</Badge>
              <Badge variant="brand">Brand</Badge>
            </div>
          </Card>
        </div>

        {/* Tag Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Tag Variants</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="tag">Tag</Badge>
              <Badge variant="tagPos">Tag Positive</Badge>
              <Badge variant="tagNeg">Tag Negative</Badge>
              <Badge variant="tagWarn">Tag Warning</Badge>
              <Badge variant="tagBrand">Tag Brand</Badge>
            </div>
          </Card>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Size Variants</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap items-center gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </Card>
        </div>

        {/* Shape Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Shape Variants</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap gap-4">
              <Badge shape="default">Default Shape</Badge>
              <Badge shape="pill">Pill Shape</Badge>
              <Badge variant="pos" shape="pill">Positive Pill</Badge>
              <Badge variant="brand" shape="pill">Brand Pill</Badge>
            </div>
          </Card>
        </div>

        {/* With Dot */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">With Status Dot</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap gap-4">
              <Badge withDot dotColor="bg-ui-pos-full">Online</Badge>
              <Badge variant="outline" withDot dotColor="bg-ui-warn-full">Away</Badge>
              <Badge variant="filled" withDot dotColor="bg-ui-neg-full">Offline</Badge>
              <Badge variant="strong" shape="pill" withDot dotColor="bg-ui-brand-full">Recording</Badge>
            </div>
          </Card>
        </div>

        {/* Common Use Cases */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Common Use Cases</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap gap-4">
              <Badge variant="pos" size="sm">New</Badge>
              <Badge variant="warn" shape="pill">Beta</Badge>
              <Badge variant="outline" withDot dotColor="bg-ui-pos-full">Active</Badge>
              <Badge variant="neg">Deprecated</Badge>
              <Badge variant="brand" shape="pill">Premium</Badge>
              <Badge variant="strong" withDot dotColor="bg-ui-warn-full">In Progress</Badge>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
} 