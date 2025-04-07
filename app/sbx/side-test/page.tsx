import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export const metadata: Metadata = {
  title: 'Clean Base',
}
export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0 z-50"/>
    </div>
  )
} 