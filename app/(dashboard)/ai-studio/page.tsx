"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentGenerator } from "@/components/ai-studio/content-generator"
import { ContentHistory } from "@/components/ai-studio/content-history"
import { FileText, MessageSquare, AlignLeft, HelpCircle } from "lucide-react"

const contentTypes = [
  { value: "posts", label: "Posts", icon: FileText },
  { value: "responses", label: "Responses", icon: MessageSquare },
  { value: "descriptions", label: "Descriptions", icon: AlignLeft },
  { value: "faqs", label: "FAQs", icon: HelpCircle },
]

export default function AIStudioPage() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI Content Studio</h1>
        <p className="text-muted-foreground mt-1">Generate professional content with AI assistance</p>
      </div>

      {/* Content Type Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-card border border-primary/30 p-1">
          {contentTypes.map((type) => {
            const Icon = type.icon
            return (
              <TabsTrigger
                key={type.value}
                value={type.value}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
              >
                <Icon className="w-4 h-4 mr-2" />
                {type.label}
              </TabsTrigger>
            )
          })}
        </TabsList>

        {contentTypes.map((type) => (
          <TabsContent key={type.value} value={type.value} className="space-y-6">
            <ContentGenerator contentType={type.value} />
          </TabsContent>
        ))}
      </Tabs>

      {/* Content History */}
      <ContentHistory />
    </div>
  )
}
