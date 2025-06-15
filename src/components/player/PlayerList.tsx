'use client';

import { Player } from '@/types/player';
import PlayerCard from './PlayerCard';

interface PlayerListProps {
  players: Player[];
  loading?: boolean;
  error?: string;
  onPlayerClick?: (player: Player) => void;
}

export default function PlayerList({ 
  players, 
  loading = false, 
  error, 
  onPlayerClick 
}: PlayerListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-32"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (players.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No players found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          onClick={onPlayerClick ? () => onPlayerClick(player) : undefined}
        />
      ))}
    </div>
  );
}