import { Player } from '@/types/player';
import { PlayerFilters } from '@/types/api';
import { useApi } from './useApi';

export function usePlayers(filters?: PlayerFilters) {
  // Build query string
  const queryParams = new URLSearchParams();
  if (filters?.position) queryParams.append('position', filters.position);
  if (filters?.team) queryParams.append('team', filters.team);
  if (filters?.minProjectedPoints) {
    queryParams.append('minProjectedPoints', filters.minProjectedPoints.toString());
  }

  const endpoint = `/api/players${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

  return useApi<Player[]>(endpoint);
}

export function usePlayer(id: string | null) {
  const endpoint = id ? `/api/players/${id}` : null;
  return useApi<Player>(endpoint);
}

export function usePlayerSearch(query: string) {
  const endpoint = query.trim() ? `/api/players/search?q=${encodeURIComponent(query)}` : null;
  return useApi<Player[]>(endpoint);
}