import useSWR from 'swr';
import { fetchData } from '@/lib/api';
import { ApiError } from '@/types/api';

export function useApi<T>(endpoint: string | null) {
  const { data, error, mutate, isLoading } = useSWR<T, ApiError>(
    endpoint,
    fetchData,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}