export interface ApiError {
    message: string;
    status: number;
  }

  export interface ApiResponse<T> {
    success: boolean;
    data: T;
    count?: number;
    error?: string;
  }
  
  export interface PaginationParams {
    page?: number;
    limit?: number;
  }
  
  export interface PlayerFilters {
    position?: string;
    team?: string;
    minProjectedPoints?: number;
    search?: string;
  }