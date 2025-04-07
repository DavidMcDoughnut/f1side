import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { CustomPlusIcon } from '@/components/icons/custom-plus'
// import { CustomChartIcon } from '@/components/icons/custom-chart' // Deleted
import { TrendUpIcon } from '@/components/icons/trend-up'
import { Plus } from 'lucide-react'
import {
  Dragger2F1,
  Facebook3F1,
  MoreHorizDmF1,
  Globe2F1,
  Youtube2F1,
  ChartBaselineF1,
  PollF1,
  ChartFillF1,
  GaugeDashedF1,
  Dollar2F1,
  ChartIconF1,
  DotSmF1,
  NochangeF1,
  NumberList2F1,
  InputOutput2F1,
  SendArrow2F1,
  ChartBarCandleF1,
  SendHorizF1,
  Quote2F1,
  Maximize3ChartF1,
  DotLgF1,
  LoaderGradF1,
  CsLogo2F1,
  Facebook2F1,
  Compass2F1,
  SineWave2F1,
  Wallet2F1,
  SendVertF1,
  CompareIconF1,
  TextBodyF1,
  Activity2F1,
  Leaderboard2F1,
  AiCopilot,
  GifF1,
  ChartCandleF1,
  // SendArrow3F1, // Deleted
  Bold2F1,
  Embed2F1,
  AtSign2F1,
  Instagram2F1,
  // SendDiag2F1, // Deleted
  RadioLeftF1,
  TradeConnectF1,
  Filter2F1,
  TradeIconF1,
  Google3F1,
  PostF1,
  HamburgerF1,
  Drag2F1,
  MoveV2F1,
  ChartLineF1,
  CsLogoF1,
  ChartF1,
  VertSliderF1,
  GaugeSolidF1,
  Snapchat2F1,
  Trash2F1,
  BetaF1,
  GradCapF1,
  Tiktok2F1,
  Google2F1,
  LaptopF1,
  GoogleCircle2F1,
  HighlightRightF1,
  VolumeLF1,
  NewChatF1,
  DraggerF1,
  Broker2F1,
  Apple2F1,
  FilterSliderF1,
  Question2F1,
  AlphaF1,
  DotMdF1,
  MailF1,
  HighlightLeftF1,
  Tiktok3F1,
  List2F1,
  WidgetF1,
  SendDiagF1,
  Twitter2F1,
  Linkedin2F1,
  Underline2F1,
  MoreVertDmF1,
  CreditCard2F1
} from '@/components/icons'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Icons',
};

const allIcons = {
  DotSmF1,
  DraggerF1,
  Embed2F1,
  Facebook2F1,
  Facebook3F1,
  Dragger2F1,
  MoreHorizDmF1,
  Globe2F1,
  Youtube2F1,
  ChartBaselineF1,
  PollF1,
  ChartFillF1,
  GaugeDashedF1,
  Dollar2F1,
  ChartIconF1,
  NochangeF1,
  NumberList2F1,
  InputOutput2F1,
  TrendUpIcon,
  SendArrow2F1,
  ChartBarCandleF1,
  SendHorizF1,
  Quote2F1,
  Maximize3ChartF1,
  DotLgF1,
  LoaderGradF1,
  CsLogo2F1,
  Compass2F1,
  SineWave2F1,
  Wallet2F1,
  SendVertF1,
  CompareIconF1,
  TextBodyF1,
  Activity2F1,
  Leaderboard2F1,
  AiCopilot,
  GifF1,
  ChartCandleF1,
  // SendArrow3F1, // Deleted
  Bold2F1,
  AtSign2F1,
  Instagram2F1,
  CustomPlusIcon,
  // SendDiag2F1, // Deleted
  RadioLeftF1,
  TradeConnectF1,
  // CustomChartIcon, // Deleted
  Filter2F1,
  TradeIconF1,
  Google3F1,
  PostF1,
  HamburgerF1,
  Drag2F1,
  MoveV2F1,
  ChartLineF1,
  CsLogoF1,
  ChartF1,
  VertSliderF1,
  GaugeSolidF1,
  Snapchat2F1,
  Trash2F1,
  BetaF1,
  GradCapF1,
  Tiktok2F1,
  Google2F1,
  LaptopF1,
  GoogleCircle2F1,
  HighlightRightF1,
  VolumeLF1,
  NewChatF1,
  Broker2F1,
  Apple2F1,
  FilterSliderF1,
  Question2F1,
  AlphaF1,
  DotMdF1,
  MailF1,
  HighlightLeftF1,
  Tiktok3F1,
  List2F1,
  WidgetF1,
  SendDiagF1,
  Twitter2F1,
  Linkedin2F1,
  Underline2F1,
  MoreVertDmF1,
  CreditCard2F1
}

export default function IconsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-light tracking-wider mb-4">ICONS</h1>
          <Separator variant="weakalpha" className="mb-6" />
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Size Variants</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-4" />
                <span className="text-xs text-tert">size-4</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-5" />
                <span className="text-xs text-tert">size-5</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6" />
                <span className="text-xs text-tert">size-6</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-8" />
                <span className="text-xs text-tert">size-8</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-4" />
                <span className="text-xs text-tert">size-4</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-5" />
                <span className="text-xs text-tert">size-5</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6" />
                <span className="text-xs text-tert">size-6</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-8" />
                <span className="text-xs text-tert">size-8</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ChartBaselineF1 className="size-4" />
                <span className="text-xs text-tert">size-4</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ChartBaselineF1 className="size-5" />
                <span className="text-xs text-tert">size-5</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ChartBaselineF1 className="size-6" />
                <span className="text-xs text-tert">size-6</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ChartBaselineF1 className="size-8" />
                <span className="text-xs text-tert">size-8</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Stroke Width Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Stroke Width Variants</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6" strokeWidth={1} />
                <span className="text-xs text-tert">stroke-1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6" strokeWidth={1.5} />
                <span className="text-xs text-tert">stroke-1.5</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6" strokeWidth={2} />
                <span className="text-xs text-tert">stroke-2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6" strokeWidth={2.5} />
                <span className="text-xs text-tert">stroke-2.5</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6" strokeWidth={1} />
                <span className="text-xs text-tert">stroke-1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6" strokeWidth={1.5} />
                <span className="text-xs text-tert">stroke-1.5</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6" strokeWidth={2} />
                <span className="text-xs text-tert">stroke-2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6" strokeWidth={2.5} />
                <span className="text-xs text-tert">stroke-2.5</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Color Variants</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6 text-prim" />
                <span className="text-xs text-tert">text-prim</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6 text-pos" />
                <span className="text-xs text-tert">text-pos</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6 text-neg" />
                <span className="text-xs text-tert">text-neg</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6 text-warn" />
                <span className="text-xs text-tert">text-warn</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6 text-brand" />
                <span className="text-xs text-tert">text-brand</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6 text-prim" />
                <span className="text-xs text-tert">text-prim</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6 text-pos" />
                <span className="text-xs text-tert">text-pos</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6 text-neg" />
                <span className="text-xs text-tert">text-neg</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6 text-warn" />
                <span className="text-xs text-tert">text-warn</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6 text-brand" />
                <span className="text-xs text-tert">text-brand</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison with Lucide */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">Comparison with Lucide</h2>
          <Card variant="static" className="p-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <CustomPlusIcon className="size-6" />
                <span className="text-xs text-tert">Custom Plus</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Plus className="size-6" />
                <span className="text-xs text-tert">Lucide Plus</span>
              </div>
              {/* Removed Custom Chart Icon comparison */}
              {/* <div className="flex flex-col items-center gap-2">
                <CustomChartIcon className="size-6" />
                <span className="text-xs text-tert">Custom Chart</span>
              </div> */}
              <div className="flex flex-col items-center gap-2">
                <TrendUpIcon className="size-6 text-tert" />
                <span className="text-xs text-tert">Trend Up</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CompareIconF1 className="size-6 text-tert" />
                <span className="text-xs text-tert">Compare</span>
              </div>
            </div>
          </Card>
        </div>

        {/* All Generated Icons */}
        <div className="space-y-4">
          <h2 className="text-lg font-base tracking-wider text-quat">All Generated Icons</h2>
          <Card variant="static" className="p-6">
            <div className="grid grid-cols-6 items-center gap-6">
              {Object.entries(allIcons).map(([name, IconComponent]) => (
                <div key={name} className="flex flex-col items-center gap-2 text-center">
                  <IconComponent className="text-tert size-6" /> 
                  <span className="text-xs text-tert truncate w-full">{name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
} 