import type { Metadata } from 'next';
import { ChartToggle } from '@/components/ui/chart-toggle'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Chart Toggle',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-light tracking-wider mb-4">CHART TOGGLE</h1>
          <Separator variant="weakalpha" className="mb-6" />
        </div>

        {/* Default Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Default Variants</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-col gap-6">
              <ChartToggle variant="default" />
              <ChartToggle variant="positive" />
              <ChartToggle variant="negative" />
            </div>
          </Card>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Size Variants</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Extra Small</span>
                <ChartToggle size="xs">
                  <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                  <ToggleGroupItem value="1w">1W</ToggleGroupItem>
                  <ToggleGroupItem value="1m">1M</ToggleGroupItem>
                  <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
                  <ToggleGroupItem value="all">ALL</ToggleGroupItem>
                </ChartToggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Small</span>
                <ChartToggle size="sm">
                  <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                  <ToggleGroupItem value="1w">1W</ToggleGroupItem>
                  <ToggleGroupItem value="1m">1M</ToggleGroupItem>
                  <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
                  <ToggleGroupItem value="all">ALL</ToggleGroupItem>
                </ChartToggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Default</span>
                <ChartToggle size="default">
                  <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                  <ToggleGroupItem value="1w">1W</ToggleGroupItem>
                  <ToggleGroupItem value="1m">1M</ToggleGroupItem>
                  <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
                  <ToggleGroupItem value="all">ALL</ToggleGroupItem>
                </ChartToggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Large</span>
                <ChartToggle size="lg">
                  <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                  <ToggleGroupItem value="1w">1W</ToggleGroupItem>
                  <ToggleGroupItem value="1m">1M</ToggleGroupItem>
                  <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
                  <ToggleGroupItem value="all">ALL</ToggleGroupItem>
                </ChartToggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Extra Large</span>
                <ChartToggle size="xl">
                  <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                  <ToggleGroupItem value="1w">1W</ToggleGroupItem>
                  <ToggleGroupItem value="1m">1M</ToggleGroupItem>
                  <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
                  <ToggleGroupItem value="all">ALL</ToggleGroupItem>
                </ChartToggle>
              </div>
            </div>
          </Card>
        </div>

        {/* Size Variants with Different States */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Size Variants with States</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <span className="text-sm text-quat">Small</span>
                <ChartToggle size="sm" variant="default" />
                <ChartToggle size="sm" variant="positive" />
                <ChartToggle size="sm" variant="negative" />
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-sm text-quat">Default</span>
                <ChartToggle size="default" variant="default" />
                <ChartToggle size="default" variant="positive" />
                <ChartToggle size="default" variant="negative" />
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-sm text-quat">Large</span>
                <ChartToggle size="lg" variant="default" />
                <ChartToggle size="lg" variant="positive" />
                <ChartToggle size="lg" variant="negative" />
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
} 