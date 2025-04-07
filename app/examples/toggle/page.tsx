import type { Metadata } from 'next';
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { Bold, Italic, Underline } from "lucide-react"

export const metadata: Metadata = {
  title: 'Toggle',
};

export default function TogglePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-light tracking-wider mb-4">TOGGLE</h1>
          <Separator variant="weakalpha" className="mb-6" />
        </div>

        {/* Basic Toggle */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Basic Toggle</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-wrap gap-4">
              <Toggle>Toggle</Toggle>
              <Toggle variant="outline">Outline</Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
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
                <Toggle size="xs">Toggle</Toggle>
                <Toggle size="xs" variant="outline">Outline</Toggle>
                <Toggle size="xs" aria-label="Toggle italic">
                  <Italic className="h-3.5 w-3.5" />
                </Toggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Small</span>
                <Toggle size="sm">Toggle</Toggle>
                <Toggle size="sm" variant="outline">Outline</Toggle>
                <Toggle size="sm" aria-label="Toggle italic">
                  <Italic className="h-3.5 w-3.5" />
                </Toggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Default</span>
                <Toggle size="default">Toggle</Toggle>
                <Toggle size="default" variant="outline">Outline</Toggle>
                <Toggle size="default" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Large</span>
                <Toggle size="lg">Toggle</Toggle>
                <Toggle size="lg" variant="outline">Outline</Toggle>
                <Toggle size="lg" aria-label="Toggle italic">
                  <Italic className="h-4.5 w-4.5" />
                </Toggle>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Extra Large</span>
                <Toggle size="xl">Toggle</Toggle>
                <Toggle size="xl" variant="outline">Outline</Toggle>
                <Toggle size="xl" aria-label="Toggle italic">
                  <Italic className="h-5 w-5" />
                </Toggle>
              </div>
            </div>
          </Card>
        </div>

        {/* Toggle Group */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Toggle Group</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Extra Small</span>
                <ToggleGroup type="multiple" size="xs">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Small</span>
                <ToggleGroup type="multiple" size="sm">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Default</span>
                <ToggleGroup type="multiple" size="default">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Large</span>
                <ToggleGroup type="multiple" size="lg">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4.5 w-4.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4.5 w-4.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4.5 w-4.5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-quat">Extra Large</span>
                <ToggleGroup type="multiple" size="xl">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-5 w-5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-5 w-5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-5 w-5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </Card>
        </div>

        {/* Single Toggle Group */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Single Toggle Group</h2>
          <Card variant="muted" className="p-6">
            <div className="flex flex-col gap-6">
              <ToggleGroup type="single" defaultValue="1D">
                <ToggleGroupItem value="1D">1D</ToggleGroupItem>
                <ToggleGroupItem value="1W">1W</ToggleGroupItem>
                <ToggleGroupItem value="1M">1M</ToggleGroupItem>
                <ToggleGroupItem value="3M">3M</ToggleGroupItem>
                <ToggleGroupItem value="6M">6M</ToggleGroupItem>
                <ToggleGroupItem value="YTD">YTD</ToggleGroupItem>
                <ToggleGroupItem value="1YR">1YR</ToggleGroupItem>
                <ToggleGroupItem value="MAX">MAX</ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" variant="positive" defaultValue="1D">
                <ToggleGroupItem value="1D">1D</ToggleGroupItem>
                <ToggleGroupItem value="1W">1W</ToggleGroupItem>
                <ToggleGroupItem value="1M">1M</ToggleGroupItem>
                <ToggleGroupItem value="3M">3M</ToggleGroupItem>
                <ToggleGroupItem value="6M">6M</ToggleGroupItem>
                <ToggleGroupItem value="YTD">YTD</ToggleGroupItem>
                <ToggleGroupItem value="1YR">1YR</ToggleGroupItem>
                <ToggleGroupItem value="MAX">MAX</ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" variant="negative" defaultValue="1D">
                <ToggleGroupItem value="1D">1D</ToggleGroupItem>
                <ToggleGroupItem value="1W">1W</ToggleGroupItem>
                <ToggleGroupItem value="1M">1M</ToggleGroupItem>
                <ToggleGroupItem value="3M">3M</ToggleGroupItem>
                <ToggleGroupItem value="6M">6M</ToggleGroupItem>
                <ToggleGroupItem value="YTD">YTD</ToggleGroupItem>
                <ToggleGroupItem value="1YR">1YR</ToggleGroupItem>
                <ToggleGroupItem value="MAX">MAX</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 