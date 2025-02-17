export interface Movie {
 id: number;
 title: string;
 overview: string;
 poster_path: string;
 backdrop_path: string;
 vote_average: number;
 release_date: string;
 genre_ids: number[];
}

export interface MovieDetails extends Movie {
 genres: Genre[];
 runtime: number;
 status: string;
 tagline: string;
 budget: number;
 revenue: number;
 production_companies: {
  id: number;
  name: string;
  logo_path: string | null;
 }[];
}

export interface Genre {
 id: number;
 name: string;
}

export interface MovieResponse {
 results: Movie[];
 page: number;
 total_pages: number;
 total_results: number;
}

export interface GenreResponse {
 genres: Genre[];
}

export type MovieType = 'featured' | 'trending' | 'popular';

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface MovieCredits {
  id: number;
  cast: Cast[];
}
