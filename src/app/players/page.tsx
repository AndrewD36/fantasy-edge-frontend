'use client';

import { useState } from 'react';
import { usePlayers } from '@/hooks/usePlayers';
import PlayerList from '@/components/player/PlayerList';
import { Button } from '@/components/ui/Button';
import { Position } from '@/types/player';

const positions: Position[] = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];

export default function PlayersPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position | undefined>();
  const { data: players, isLoading, error } = usePlayers({ 
    position: selectedPosition 
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Players</h1>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={!selectedPosition ? 'default' : 'outline'}
            onClick={() => setSelectedPosition(undefined)}
          >
            All
          </Button>
          {positions.map((position) => (
            <Button
              key={position}
              variant={selectedPosition === position ? 'default' : 'outline'}
              onClick={() => setSelectedPosition(position)}
            >
              {position}
            </Button>
          ))}
        </div>
      </div>

      <PlayerList
        players={players || []}
        loading={isLoading}
        error={error?.message}
      />
    </div>
  );
}