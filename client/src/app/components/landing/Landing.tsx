'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Landing() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        {/* Hero Section */}
        <header className="container mx-auto px-4 pt-24 pb-16 text-center">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Never Miss An Internship Deadline Again</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track applications, set reminders, and collaborate with your peers to land your dream internship. Join thousands of students maximizing their opportunities.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
