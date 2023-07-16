export interface GameBrief {
  id: number;
  thumbnail: string | undefined;
  title: string;
  genre: string;
  release_date: string | null;
  platform: string | undefined;
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
    screenshots: Array<{ id: number; image: string }> | null;
    developer: string | undefined;
    publisher: string | undefined;
    platform: string | undefined;
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
