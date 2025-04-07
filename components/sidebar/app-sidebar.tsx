import { Home, PanelLeftIcon, PieChart, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Icon } from "@/components/ui/icon"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items with their respective icons
const items = [
  {
    title: "Home",
    url: "/sbx/dash",
    icon: Home,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: PieChart,
  },
  {
    title: "Insights",
    url: "/insights",
    icon: TrendingUp,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-nav">
      <SidebarHeader className="h-14 flex px-3">
        <div className="flex-1 h-full flex items-center gap-4">
          <div className="flex items-center justify-center h-full flex-1 group-data-[collapsible=icon]:justify-center">
            <Image src="/riskarb.svg" alt="RiskArb Logo" width={28} height={28} />
          </div>
          <div className="flex-1 h-full flex items-center text-base font-normal text-prim rounded-sm tracking-2xwide group-data-[collapsible=icon]:hidden">
            FIN<span className="text-pos">TANGO</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.title === "Home"}
                  >
                    <Link href={item.url}>
                      <Icon icon={item.icon} className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarTrigger className="flex h-10 w-10 items-center justify-center rounded-sm text-tert hover:bg-ui-base-weak hover:text-prim">
                  <Icon icon={PanelLeftIcon} className="h-5 w-5" />
                </SidebarTrigger>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
} 