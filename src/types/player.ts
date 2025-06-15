export interface Player {
    id: string;
    name: string;
    position: Position;
    team: string;
    projectedPoints: number;
    averagePoints: number;
    gamesPlayed: number;
    isInjured: boolean;
    injuryStatus?: string;
    byeWeek: number;
    seasonStats?: SeasonStats;
  }
  
  export interface SeasonStats {
    passingYards?: number;
    passingTouchdowns?: number;
    interceptions?: number;
    rushingYards?: number;
    rushingTouchdowns?: number;
    receptions?: number;
    receivingYards?: number;
    receivingTouchdowns?: number;
    fumbles?: number;
  }
  
  export type Position = 'QB' | 'RB' | 'WR' | 'TE' | 'K' | 'DEF';
  
 