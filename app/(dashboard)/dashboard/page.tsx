import { StatCard } from "@/components/dashboard/stat-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { MapPin, MessageSquare, Star, TrendingUp } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch real stats from database
  const { data: locations } = await supabase
    .from("gmb_locations")
    .select("*")
    .eq("user_id", user?.id || "")

  const { data: reviews } = await supabase
    .from("gmb_reviews")
    .select("*")
    .eq("user_id", user?.id || "")

  const totalLocations = locations?.length || 0
  const totalReviews = reviews?.length || 0
  const averageRating =
    reviews && reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : "0.0"

  const respondedReviews = reviews?.filter((r) => r.status === "responded").length || 0
  const responseRate = totalReviews > 0 ? Math.round((respondedReviews / totalReviews) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s your GMB overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Locations"
          value={totalLocations}
          change="+2 this month"
          changeType="positive"
          icon={MapPin}
          index={0}
        />
        <StatCard
          title="Total Reviews"
          value={totalReviews}
          change="+12 this week"
          changeType="positive"
          icon={MessageSquare}
          index={1}
        />
        <StatCard
          title="Average Rating"
          value={averageRating}
          change="+0.2 from last month"
          changeType="positive"
          icon={Star}
          index={2}
        />
        <StatCard
          title="Response Rate"
          value={`${responseRate}%`}
          change="+5% this month"
          changeType="positive"
          icon={TrendingUp}
          index={3}
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <PerformanceChart />
        <ActivityFeed />
      </div>
    </div>
  )
}
