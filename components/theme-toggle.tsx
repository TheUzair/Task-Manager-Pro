"use client"

import * as React from "react"
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-1 bg-muted/50 p-1 rounded-full border border-border">
        <div className="h-8 w-8 rounded-full" />
        <div className="h-8 w-8 rounded-full" />
        <div className="h-8 w-8 rounded-full" />
      </div>
    )
  }

  const themes = [
    { name: "light", icon: SunIcon, label: "Light" },
    { name: "system", icon: ComputerDesktopIcon, label: "System" },
    { name: "dark", icon: MoonIcon, label: "Dark" },
  ]

  return (
    <div className="flex items-center space-x-1 bg-muted/50 p-1 rounded-full border border-border shadow-sm">
      {themes.map((t) => {
        const Icon = t.icon
        const isActive = theme === t.name

        return (
          <Button
            key={t.name}
            variant="ghost"
            size="icon"
            onClick={() => setTheme(t.name)}
            className={cn(
              "h-8 w-8 rounded-full transition-all cursor-pointer",
              isActive 
                ? "bg-background text-primary shadow-sm scale-110" 
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            )}
            title={t.label}
          >
            <Icon className="h-4 w-4" />
            <span className="sr-only">{t.label}</span>
          </Button>
        )
      })}
    </div>
  )
}
