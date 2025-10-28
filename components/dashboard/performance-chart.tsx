"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", rating: 4.2, reviews: 45 },
  { month: "Feb", rating: 4.3, reviews: 52 },
  { month: "Mar", rating: 4.4, reviews: 61 },
  { month: "Apr", rating: 4.5, reviews: 58 },
  { month: "May", rating: 4.6, reviews: 67 },
  { month: "Jun", rating: 4.7, reviews: 73 },
]

export function PerformanceChart() {
  return (
    <Card className="bg-card border-primary/30">
      <CardHeader>
        <CardTitle className="text-foreground">Rating Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 107, 53, 0.1)" />
            <XAxis dataKey="month" stroke="#999999" style={{ fontSize: "12px" }} />
            <YAxis stroke="#999999" style={{ fontSize: "12px" }} domain={[4.0, 5.0]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 107, 53, 0.3)",
                borderRadius: "8px",
                color: "#ffffff",
              }}
            />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#ff6b35"
              strokeWidth={3}
              dot={{ fill: "#ff6b35", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
