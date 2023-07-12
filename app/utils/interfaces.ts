export interface GameBrief {
  id: number;
  thumbnail: string;
  title: string;
  genre: string;
  release_date: string;
  platform: string;
}

export interface UrlParams {
  params: {
    gameId: string;
    game_name: string[];
  };
}

export interface GameFull {
  params: {
    gameId: string;
    game_name: string[];
  };
  item: {
    title: string;
    screenshots: Array<{ id: number; image: string }>;
    id: number;
    developer: string;
    publisher: string;
    platform: string;
    genres: string;
    short_description: string;
    minimum_system_requirements: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
      additional_notes: string;
    } | null;
    game_url: string;
  };
}
