import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { ArrowRight, Trophy, BarChart3, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(222.2, 47.4%, 11.2%)" }}>
      {/* Navigation */}
      <nav className="w-full py-4 px-6 flex justify-between items-center">
        <Typography variant="h3" className="text-white">Fantasy Edge</Typography>
        <div className="flex gap-4">
          <Link href="/auth/signin">
            <Button variant="ghost" className="text-white/80 hover:text-white">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-4 text-center py-16 overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[600px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl transform -rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <Typography variant="h1" className="text-white mb-6 text-5xl md:text-6xl font-bold drop-shadow-lg">
            Dominate Your Fantasy League
          </Typography>
          <Typography variant="h2" className="text-white/80 mb-8 text-xl md:text-2xl max-w-2xl drop-shadow-lg">
            Import your leagues from any platform and get advanced analytics for drafting, roster management, and real-time insights.
          </Typography>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/home">
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                Continue as Guest
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <Typography variant="h2" className="text-white text-center mb-16 text-3xl md:text-4xl">
            Everything You Need to Win
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Trophy className="h-12 w-12 text-blue-500 mb-4" />
              <Typography variant="h3" className="text-white mb-2">Smart Drafting</Typography>
              <Typography className="text-white/70">
                AI-powered draft recommendations based on your league settings and scoring rules.
              </Typography>
            </div>
            <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <BarChart3 className="h-12 w-12 text-blue-500 mb-4" />
              <Typography variant="h3" className="text-white mb-2">Advanced Analytics</Typography>
              <Typography className="text-white/70">
                Deep statistical analysis and projections to make informed roster decisions.
              </Typography>
            </div>
            <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Users className="h-12 w-12 text-blue-500 mb-4" />
              <Typography variant="h3" className="text-white mb-2">League Integration</Typography>
              <Typography className="text-white/70">
                Seamlessly import your leagues from ESPN, Yahoo, Sleeper, and more.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h2" className="text-white mb-6 text-3xl md:text-4xl">
            Ready to Transform Your Fantasy Experience?
          </Typography>
          <Typography className="text-white/70 mb-8 text-lg">
            Join thousands of fantasy managers who are making better decisions and winning more leagues.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Free <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Typography className="text-white/60">© 2024 Fantasy Edge. All rights reserved.</Typography>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/60 hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white">Terms</Link>
            <Link href="/contact" className="text-white/60 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}