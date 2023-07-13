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

export interface GameFull extends UrlParams {
  game: {
    id: number;
    title: string;
    screenshots: Array<{ id: number; image: string }>;
    developer: string;
    publisher: string;
    platform: string;
    short_description: string;
    minimum_system_requirements: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    } | null;
    game_url: string;
  };
}
