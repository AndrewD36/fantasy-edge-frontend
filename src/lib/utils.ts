import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPoints(points: number): string {
  return points.toFixed(1);
}

export function getPositionColor(position: string): string {
  const colors: Record<string, string> = {
    QB: 'bg-red-100 text-red-800',
    RB: 'bg-green-100 text-green-800',
    WR: 'bg-blue-100 text-blue-800',
    TE: 'bg-purple-100 text-purple-800',
    K: 'bg-yellow-100 text-yellow-800',
    DEF: 'bg-gray-100 text-gray-800',
  };
  return colors[position] || 'bg-gray-100 text-gray-800';
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}