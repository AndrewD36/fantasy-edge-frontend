import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(222.2, 47.4%, 11.2%)" }}>
      <header className="flex items-center justify-center w-full px-8 py-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Players</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>View All Players</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>View All Teams</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Stats</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Player Statistics</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Account Settings</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Typography variant="h1" className="text-white">
              Top Players
            </Typography>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              View All Players
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Patrick Mahomes Card */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-[600px] rounded-xl overflow-hidden">
              <div className="relative h-[300px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 via-blue-600/20 to-black/80" />
                <div className="absolute inset-0 bg-[url('/players/mahomes.jpg')] bg-cover bg-center" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2 py-1 bg-white/20 text-white rounded text-sm backdrop-blur-sm">QB</span>
                  <span className="px-2 py-1 bg-white/20 text-white rounded text-sm backdrop-blur-sm">KC</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Typography variant="h3" className="text-white text-2xl font-bold">
                    Patrick Mahomes
                  </Typography>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Passing Yards</Typography>
                    <Typography className="text-white font-semibold text-lg">4,183</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Touchdowns</Typography>
                    <Typography className="text-white font-semibold text-lg">31</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Interceptions</Typography>
                    <Typography className="text-white font-semibold text-lg">8</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Completion %</Typography>
                    <Typography className="text-white font-semibold text-lg">66.3%</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Christian McCaffrey Card */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-[600px] rounded-xl overflow-hidden">
              <div className="relative h-[300px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/40 via-red-600/20 to-black/80" />
                <div className="absolute inset-0 bg-[url('/players/mccaffrey.jpg')] bg-cover bg-center" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2 py-1 bg-white/20 text-white rounded text-sm backdrop-blur-sm">RB</span>
                  <span className="px-2 py-1 bg-white/20 text-white rounded text-sm backdrop-blur-sm">SF</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Typography variant="h3" className="text-white text-2xl font-bold">
                    Christian McCaffrey
                  </Typography>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Rushing Yards</Typography>
                    <Typography className="text-white font-semibold text-lg">1,459</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Touchdowns</Typography>
                    <Typography className="text-white font-semibold text-lg">14</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Receptions</Typography>
                    <Typography className="text-white font-semibold text-lg">67</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Receiving Yards</Typography>
                    <Typography className="text-white font-semibold text-lg">564</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tyreek Hill Card */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-[600px] rounded-xl overflow-hidden">
              <div className="relative h-[300px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-600/40 via-teal-600/20 to-black/80" />
                <div className="absolute inset-0 bg-[url('/players/hill.jpg')] bg-cover bg-center" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2 py-1 bg-white/20 text-white rounded text-sm backdrop-blur-sm">WR</span>
                  <span className="px-2 py-1 bg-white/20 text-white rounded text-sm backdrop-blur-sm">MIA</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Typography variant="h3" className="text-white text-2xl font-bold">
                    Tyreek Hill
                  </Typography>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Receptions</Typography>
                    <Typography className="text-white font-semibold text-lg">119</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Receiving Yards</Typography>
                    <Typography className="text-white font-semibold text-lg">1,799</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Touchdowns</Typography>
                    <Typography className="text-white font-semibold text-lg">13</Typography>
                  </div>
                  <div className="space-y-2">
                    <Typography className="text-white/60 text-sm">Yards Per Catch</Typography>
                    <Typography className="text-white font-semibold text-lg">15.1</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 