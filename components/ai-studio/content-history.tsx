"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Copy, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

interface HistoryItem {
  id: string
  type: string
  content: string
  tone: string
  timestamp: string
}

const mockHistory: HistoryItem[] = [
  {
    id: "1",
    type: "posts",
    content: "We're excited to announce our new summer menu! Come try our fresh, locally-sourced dishes...",
    tone: "enthusiastic",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "responses",
    content: "Thank you for your wonderful feedback! We're thrilled to hear you enjoyed your experience...",
    tone: "professional",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    type: "descriptions",
    content: "Welcome to our family-owned restaurant where tradition meets innovation...",
    tone: "friendly",
    timestamp: "1 day ago",
  },
]

export function ContentHistory() {
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <Card className="bg-card border-primary/30">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Recent Generations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockHistory.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-secondary border border-primary/20 hover:border-primary/40 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/30 capitalize">{item.type}</Badge>
                <Badge variant="outline" className="border-primary/30 text-muted-foreground capitalize">
                  {item.tone}
                </Badge>
              </div>
              <span className="text-xs text-muted-foreground">{item.timestamp}</span>
            </div>
            <p className="text-sm text-foreground line-clamp-2 mb-3">{item.content}</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleCopy(item.content)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="w-3 h-3 mr-1" />
                Delete
              </Button>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
