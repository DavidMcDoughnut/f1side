import type { Metadata } from 'next';
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TickerSymbol } from "@/components/ui/ticker-symbol";
import { ChartToggle } from "@/components/ui/chart-toggle";
import { TickerPrice } from '@/components/ui/ticker-price';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TradeIconF1 } from "@/components/icons";

export const metadata: Metadata = {
  title: 'Chart Base',
};

export default function ChartBaseExamplesPage() {
  return (
    <div className="container mx-auto pt-12 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 mb-4">
            <p className="font-semibold text-4xl text-prim tracking-wider">McDonut<span className="text-pos font-light">World</span></p><div className="text-4xl text-invr font-light">/</div>
            <p className="font-light text-4xl text-scnd tracking-wide">F1 Carbon</p><div className="text-4xl text-invr font-light">/</div>
            <p className="font-light text-4xl text-disb tracking-wide">Chart Base</p>
          </div>
        </div>
        <Separator variant="weakalpha" className="mb-4" />

        {/* Chart Base Section */}
        <div className="mb-12 w-full h-auto">
          <h1 className="text-2xl font-normal tracking-wide mb-4">CHART BASE</h1>
          <Separator variant="weakalpha" className="mb-6" />
          
          <div className="grid grid-cols-1 gap-6">
            <Card variant="muted" className="p-6 pt-4">
              <CardHeader className="mb-6 gap-4">
                <div className="flex flex-col gap-2 ">
                  <div className="flex items-center justify-between">
                    <TickerSymbol symbolTicker="AMZN" symbolName="Amazon" size="xl" orientation="horizontal" />
                    <ChartToggle size="default" variant="positive" />
                  </div>
                  <div className="flex items-center justify-between">
                    <TickerPrice size="xl" direction="up" priceValue="$420.00" priceChange="$42.06, 11.34%" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 h-5">
                    <Button variant="dash" size="sm" className="gap-1.5">
                      <TradeIconF1 />
                      Trades
                      <ChevronDown />
                    </Button>
                    <Button variant="dash" size="sm" className="gap-1.5">
                      <TradeIconF1 />
                      Compare
                      <ChevronDown />
                    </Button>
                    <Button variant="dash" size="sm" className="gap-1.5">
                      <TradeIconF1 />
                      Retail Data
                      <ChevronDown />
                    </Button>
                    <Button variant="dash" size="sm" className="gap-1.5">
                      <TradeIconF1 />
                      News
                      <ChevronDown />
                    </Button>
                    <Button variant="dash" size="sm" className="gap-1.5">
                      <TradeIconF1 />
                      Price Targets
                      <ChevronDown />
                    </Button>
                    <Button variant="dash" size="sm" className="gap-1.5">
                      <TradeIconF1 />
                      Tweets
                      <ChevronDown />
                    </Button>
                    

                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="tag">All</Badge>
                    <Badge variant="tag">Stocks</Badge>
                    <Badge variant="tag">Options</Badge>
                    <Badge variant="tag">Crypto</Badge>
                    <Badge variant="tag">Trades</Badge>
                    <Badge variant="tag">News</Badge>
                    <Badge variant="tag">Earnings</Badge>
                    <Badge variant="tag">Macro</Badge>
                  </div>
                </div>
                
              </CardHeader>
              <CardContent>
                {/* Content will go here */}
                <div className="flex items-center justify-between h-140 border border-strk-weak rounded-md">
                
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 