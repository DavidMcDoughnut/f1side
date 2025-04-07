import type { Metadata } from 'next';
import { AssetChip } from '@/components/ui/asset-chip'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { TickerSymbol } from '@/components/ui/ticker-symbol';
import { PriceChange } from '@/components/ui/price-change';
import { TickerPrice } from '@/components/ui/ticker-price';
import { TickerCard } from '@/components/ui/ticker-card';

export const metadata: Metadata = {
  title: 'Asset Chip',
};

export default function AssetChipPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-light tracking-wider mb-4">ASSET COMPONENTS</h1>
          <Separator variant="weakalpha" className="mb-6" />
        </div>

        {/* Ticker Card Examples */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-prim">Ticker Card</h2>
          <div className="grid grid-cols-4 gap-6">
            <TickerCard
              variant="up"
              symbolTicker="NVDA"
              symbolName="Nvidia"
              priceChange="$141.69, 2.5%"
              priceValue="850.23"
              priceChangeClassName="px-0"
            />
            <TickerCard
              variant="down"
              symbolTicker="TSLA"
              symbolName="Tesla"
              priceChange="$10.89, 1.8%"
              priceValue="175.45"
              priceChangeClassName="px-0"
            />
            <TickerCard
              variant="up"
              symbolTicker="AAPL"
              symbolName="Apple"
              priceChange="$0.90, 0.9%"
              priceValue="169.58"
              priceChangeClassName="px-0"
            />
            <TickerCard
              variant="flat"
              symbolTicker="MSFT"
              symbolName="Microsoft"
              priceChange="$0.00, 0.0%"
              priceValue="425.22"
              priceChangeClassName="px-0"
            />
          </div>
        </div>

        {/* Consolidated Asset Chip Variants Card */}
        <div className="space-y-4">
        <h2 className="text-lg font-base tracking-wider text-prim">Asset Chip</h2>
        <Card variant="muted" className="p-6 space-y-8">
          {/* Default Variants */}
          <div className="space-y-4">
            <h2 className="text-lg font-base tracking-wider text-quat">Default Variants</h2>
            <div className="flex flex-wrap gap-4">
              <AssetChip symbol="AAPL" value="11.34%" direction="up" variant="pos" />
              <AssetChip symbol="MSFT" value="2.45%" direction="down" variant="neg" />
              <AssetChip symbol="TSLA" value="0.05%" direction="up" variant="warn" />
              <AssetChip symbol="NVDA" value="15.7%" direction="up" variant="brand" />
              <AssetChip symbol="GOOG" value="0.89%" direction="down" />
            </div>
          </div>

          <Separator variant="weakalpha"/>

          {/* Ghost Variants */}
          <div className="space-y-4">
            <h2 className="text-lg font-base tracking-wider text-quat">Ghost Variants</h2>
            <div className="flex flex-wrap gap-4">
              <AssetChip symbol="AAPL" value="11.34%" direction="up" variant="pos-ghost" />
              <AssetChip symbol="MSFT" value="2.45%" direction="down" variant="neg-ghost" />
              <AssetChip symbol="TSLA" value="0.05%" direction="up" variant="warn-ghost" />
              <AssetChip symbol="NVDA" value="15.7%" direction="up" variant="brand-ghost" />
              <AssetChip symbol="GOOG" value="0.89%" direction="down" variant="ghost" />
            </div>
          </div>

          <Separator variant="weakalpha"/>

          {/* Size Variants */}
          <div className="space-y-4">
            <h2 className="text-lg font-base tracking-wider text-quat">Size Variants</h2>
            <div className="flex flex-wrap items-center gap-4">
              <AssetChip size="sm" symbol="AAPL" value="11.34%" direction="up" variant="pos" />
              <AssetChip size="default" symbol="AAPL" value="11.34%" direction="up" variant="pos" />
              <AssetChip size="lg" symbol="AAPL" value="11.34%" direction="up" variant="pos" />
            </div>
          </div>

          <Separator variant="weakalpha"/>

          {/* Common Use Cases */}
          <div className="space-y-4">
            <h2 className="text-lg font-base tracking-wider text-quat">Common Use Cases</h2>
            <div className="flex flex-wrap gap-4">
              <AssetChip variant="pos-ghost" symbol="BTC" value="2.45%" direction="up" size="sm" />
              <AssetChip variant="neg-ghost" symbol="ETH" value="1.23%" direction="down" />
              <AssetChip variant="warn-ghost" symbol="SOL" value="0.05%" direction="up" />
              <AssetChip variant="brand-ghost" symbol="DOGE" value="15.7%" direction="up" size="lg" />
              <AssetChip variant="ghost" symbol="XRP" value="0.89%" direction="down" />
            </div>
          </div>
        </Card>
        </div>
        {/* Ticker Symbol Variants Card (Unchanged) */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-prim">Ticker Symbol</h2>
          <Card variant="muted" className="p-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Horizontal Orientation */}
              <div className="space-y-4">
                <h2 className="text-lg font-base tracking-wider text-quat">Horizontal</h2>
                <div className="flex flex-col items-start space-y-4">
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="xl" orientation="horizontal" />
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="lg" orientation="horizontal" />
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="base" orientation="horizontal" />
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="sm" orientation="horizontal" />
                </div>
              </div>
              {/* Vertical Orientation */}
              <div className="space-y-4">
                <h2 className="text-lg font-base tracking-wider text-quat">Vertical</h2>
                <div className="flex flex-row items-start space-x-8">
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="xl" orientation="vertical" />
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="lg" orientation="vertical" />
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="base" orientation="vertical" />
                  <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="sm" orientation="vertical" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Price Change Variants Card */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-prim">Price Change</h2>
          <Card variant="muted" className="p-6 space-y-8">
            {/* Direction Variants */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Direction Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <PriceChange direction="up" price="$42.06, 1.41%" timePeriod="1W" />
                <PriceChange direction="down" price="$42.06, 1.41%" timePeriod="1W" />
                <PriceChange direction="flat" price="$42.06, 1.41%" timePeriod="1W" />
              </div>
            </div>

            <Separator variant="weakalpha"/>

            {/* Size Variants */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Size Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <PriceChange size="xs" direction="up" price="11.34%" timePeriod="1D" />
                <PriceChange size="sm" direction="up" price="11.34%" timePeriod="1D" />
                <PriceChange size="md" direction="up" price="11.34%" timePeriod="1D" />
                <PriceChange size="lg" direction="up" price="11.34%" timePeriod="1D" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <PriceChange size="xs" direction="down" price="2.45%" timePeriod="5D" />
                <PriceChange size="sm" direction="down" price="2.45%" timePeriod="5D" />
                <PriceChange size="md" direction="down" price="2.45%" timePeriod="5D" />
                <PriceChange size="lg" direction="down" price="2.45%" timePeriod="5D" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <PriceChange size="xs" direction="flat" price="0.00%" timePeriod="1M" />
                <PriceChange size="sm" direction="flat" price="0.00%" timePeriod="1M" />
                <PriceChange size="md" direction="flat" price="0.00%" timePeriod="1M" />
                <PriceChange size="lg" direction="flat" price="0.00%" timePeriod="1M" />
              </div>
            </div>

            <Separator variant="weakalpha"/>

            {/* Time Period Visibility */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Time Period Visibility</h3>
              <div className="flex flex-wrap items-center gap-4">
                <PriceChange direction="up" price="$1.23" timePeriod="YTD" showTimePeriod={true} />
                <PriceChange direction="down" price="$5.67" timePeriod="1Y" showTimePeriod={false} />
                <PriceChange direction="flat" price="$0.00" timePeriod="MAX" showTimePeriod={false} />
              </div>
            </div>
          </Card>
        </div>

        {/* Ticker Price Variants Card */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-prim">Ticker Price</h2>
          <Card variant="muted" className="p-6 space-y-8">
            
            {/* Horizontal Orientation */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Horizontal Orientation</h3>
              <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                <TickerPrice 
                  orientation="horizontal" 
                  alignment="left" 
                  size="md" 
                  direction="up" 
                  priceValue="$420.00" 
                  priceChange="$42.06, 11.34%" 
                  timePeriod="1W" 
                />
                <TickerPrice 
                  orientation="horizontal" 
                  alignment="right" 
                  size="md" 
                  direction="down" 
                  priceValue="$420.00" 
                  priceChange="$42.06, 11.34%" 
                  timePeriod="1W" 
                />
                <TickerPrice 
                  orientation="horizontal" 
                  alignment="left" 
                  size="md" 
                  direction="flat" 
                  priceValue="$420.00" 
                  priceChange="$0.00, 0.00%" 
                  timePeriod="1W" 
                />
              </div>
            </div>

            <Separator variant="weakalpha"/>

            {/* Vertical Orientation */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Vertical Orientation</h3>
              <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                <TickerPrice 
                  orientation="vertical" 
                  alignment="left" 
                  size="md" 
                  direction="up" 
                  priceValue="$420.00" 
                  priceChange="$42.06, 11.34%" 
                  timePeriod="1W" 
                />
                <TickerPrice 
                  orientation="vertical" 
                  alignment="right" 
                  size="md" 
                  direction="down" 
                  priceValue="$420.00" 
                  priceChange="$42.06, 11.34%" 
                  timePeriod="1W" 
                />
                 <TickerPrice 
                  orientation="vertical" 
                  alignment="left" 
                  size="md" 
                  direction="flat" 
                  priceValue="$420.00" 
                  priceChange="$0.00, 0.00%" 
                  timePeriod="1W" 
                />
              </div>
            </div>

            <Separator variant="weakalpha"/>

            {/* Size Variants */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Size Variants (Horizontal Example)</h3>
              <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
                <TickerPrice size="sm" direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
                <TickerPrice size="md" direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
                <TickerPrice size="lg" direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
                <TickerPrice size="xl" direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
              </div>
              <h3 className="text-base font-base tracking-wider text-quat mt-4">Size Variants (Vertical Example)</h3>
              <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                 <TickerPrice orientation="vertical" size="sm" direction="down" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
                 <TickerPrice orientation="vertical" size="md" direction="down" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
                 <TickerPrice orientation="vertical" size="lg" direction="down" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
                 <TickerPrice orientation="vertical" size="xl" direction="down" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" />
              </div>
            </div>
            
            <Separator variant="weakalpha"/>

            {/* Time Period Visibility */}
            <div className="space-y-4">
              <h3 className="text-base font-base tracking-wider text-quat">Time Period Visibility</h3>
              <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
                <TickerPrice direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" showTimePeriod={true} />
                <TickerPrice direction="down" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" showTimePeriod={false} />
              </div>
               <div className="flex flex-wrap items-start gap-x-8 gap-y-4 mt-4">
                <TickerPrice orientation="vertical" direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" showTimePeriod={true} />
                <TickerPrice orientation="vertical" direction="down" priceValue="$420.00" priceChange="$42.06, 11.34%" timePeriod="1W" showTimePeriod={false} />
              </div>
            </div>

          </Card>
        </div>

      </div>
    </div>
  )
} 