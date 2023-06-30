export type ApiResponse = {
    page: number;
    // This is what we give to [TrendingMovies].
    results: ApiResponseResults[];
    total_pages: number;
    total_results: number;
}

export type ApiResponseResults = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: string[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}