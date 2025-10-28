"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  index: number
}

export function StatCard({ title, value, change, changeType = "neutral", icon: Icon, index }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = typeof value === "string" ? Number.parseFloat(value) : value

  useEffect(() => {
    if (typeof numericValue === "number" && !isNaN(numericValue)) {
      let start = 0
      const end = numericValue
      const duration = 1000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setDisplayValue(end)
          clearInterval(timer)
        } else {
          setDisplayValue(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [numericValue])

  const changeColor =
    changeType === "positive" ? "text-green-500" : changeType === "negative" ? "text-red-500" : "text-muted-foreground"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-3xl font-bold text-foreground">
                {typeof value === "string" ? value : Math.round(displayValue).toLocaleString()}
              </p>
              {change && <p className={`text-xs font-medium ${changeColor}`}>{change}</p>}
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
