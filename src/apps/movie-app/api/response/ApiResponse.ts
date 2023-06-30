export type ApiResponse = {
    page: number;
    // This is what we give to [TrendingMovies] and [MovieList].
    results: ApiResponseResults[];
    total_pages: number;
    total_results: number;
};

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
};

export type ApiMovieCredits = {
    cast: ApiMovieCreditsCast[];
    crew: ApiMovieCreditsCrew[];
    id: number;
};

export type ApiMovieCreditsCast = {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
};

export type ApiMovieCreditsCrew = {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
};