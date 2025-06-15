import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fantasy Edge
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Make smarter fantasy decisions with data-driven insights
          </p>
          
          <div className="space-x-4">
            <Link href="/players">
              <Button size="lg">View Players</Button>
            </Link>
            <Link href="/rankings">
              <Button variant="outline" size="lg">See Rankings</Button>
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">Player Projections</h3>
            <p className="text-gray-600">Get accurate weekly projections for all players</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Lineup Optimizer</h3>
            <p className="text-gray-600">Optimize your lineup for maximum points</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-lg font-semibold mb-2">Rankings</h3>
            <p className="text-gray-600">See how players rank across all positions</p>
          </div>
        </div>
      </div>
    </div>
  );
}