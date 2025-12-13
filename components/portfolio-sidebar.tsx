"use client"

import { Button } from "@/components/ui/button"
import { FileText, FolderOpen, Target, Home, FileEdit } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function PortfolioSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "메인", icon: Home },
    { href: "/resume", label: "이력서", icon: FileText },
    { href: "/projects", label: "프로젝트", icon: FolderOpen },
    { href: "/cover-letter", label: "자기소개서", icon: FileEdit },
    { href: "/goals", label: "앞으로의 포부", icon: Target },
  ]

  return (
    <aside className="w-64 border-r bg-card/50 backdrop-blur-sm flex flex-col sticky top-0 h-screen">
      <div className="p-6 border-b">
        <h2 className="text-lg font-bold">About Me</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn("w-full justify-start", isActive && "bg-primary text-primary-foreground")}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
