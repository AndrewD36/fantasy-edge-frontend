import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "hsl(222.2, 47.4%, 11.2%)" }}>
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <Typography variant="h1" className="text-white mb-2">
            Welcome Back
          </Typography>
          <Typography variant="p" className="text-white/60">
            Sign in to your account
          </Typography>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-white">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 mt-1 bg-background border border-border rounded-md text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-white">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 bg-background border border-border rounded-md text-white"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <Typography variant="p" className="text-white/60">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
} 