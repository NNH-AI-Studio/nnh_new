import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart3, MapPin, MessageSquare, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Manage Your Google My Business Like a Pro
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The ultimate platform for managing multiple GMB locations, responding to reviews with AI, and growing your
              online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8"
              >
                <Link href="/auth/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 bg-transparent"
              >
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            <div className="p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Location Management</h3>
              <p className="text-muted-foreground text-sm">Manage all your GMB locations from one powerful dashboard</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Reviews</h3>
              <p className="text-muted-foreground text-sm">
                Generate intelligent responses to reviews with advanced AI
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground text-sm">Track performance with detailed insights and reports</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Content Studio</h3>
              <p className="text-muted-foreground text-sm">Create engaging posts and content with AI assistance</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">GMB Platform</h3>
              <p className="text-sm text-muted-foreground">
                The ultimate Google My Business management solution for modern businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GMB Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
