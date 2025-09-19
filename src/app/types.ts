export interface TMDBMediaItem {
  id: number;
  title?: string;
  name?: string;
  media_type?: 'movie' | 'tv';
  first_air_date?: string;
  release_date?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface TMDBVideo {
  id: string;
  key: string;
  site: string;
  type: string;
  name: string;
}
