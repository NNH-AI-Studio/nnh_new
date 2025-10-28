"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import { motion } from "framer-motion"

export function PublicHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b border-primary/20 bg-black/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-2 group-hover:scale-110 transition-transform">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GMB Platform
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary">
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <Link href="/auth/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
