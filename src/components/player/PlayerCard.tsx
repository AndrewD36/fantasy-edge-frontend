import { Player } from '@/types/player';
import { Card, CardContent } from '@/components/ui/Card';
import { formatPoints, getPositionColor } from '@/lib/utils';

interface PlayerCardProps {
  player: Player;
  onClick?: () => void;
}

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  return (
    <Card 
      className={`cursor-pointer hover:shadow-md transition-shadow ${onClick ? 'hover:border-blue-300' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{player.name}</h3>
            <p className="text-sm text-gray-600">{player.team}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionColor(player.position)}`}>
            {player.position}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Projected</p>
            <p className="font-semibold">{formatPoints(player.projectedPoints)} pts</p>
          </div>
          <div>
            <p className="text-gray-500">Average</p>
            <p className="font-semibold">{formatPoints(player.averagePoints)} pts</p>
          </div>
        </div>
        
        {player.isInjured && (
          <div className="mt-2 text-red-600 text-xs font-medium">
            ⚠️ {player.injuryStatus || 'Injured'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}