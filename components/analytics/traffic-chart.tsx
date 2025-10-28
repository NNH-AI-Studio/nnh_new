"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export function TrafficChart() {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchTrafficData() {
      try {
        const { data: locations } = await supabase.from("gmb_locations").select("total_views, created_at")

        if (locations) {
          // Generate last 7 days of data
          const last7Days = Array.from({ length: 7 }, (_, i) => {
            const date = new Date()
            date.setDate(date.getDate() - (6 - i))
            return {
              day: date.toLocaleDateString("en-US", { weekday: "short" }),
              views: Math.floor(Math.random() * 500) + 200, // Simulated daily views
            }
          })

          setData(last7Days)
        }
      } catch (error) {
        console.error("Error fetching traffic data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrafficData()
  }, [supabase])

  if (isLoading) {
    return (
      <Card className="bg-card border-primary/30">
        <CardHeader>
          <CardTitle className="text-foreground">Traffic Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-secondary animate-pulse rounded" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-primary/30">
      <CardHeader>
        <CardTitle className="text-foreground">Traffic Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 107, 53, 0.1)" />
            <XAxis dataKey="day" stroke="#999999" style={{ fontSize: "12px" }} />
            <YAxis stroke="#999999" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 107, 53, 0.3)",
                borderRadius: "8px",
                color: "#ffffff",
              }}
            />
            <Line type="monotone" dataKey="views" stroke="#FF6B35" strokeWidth={2} dot={{ fill: "#FF6B35", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
