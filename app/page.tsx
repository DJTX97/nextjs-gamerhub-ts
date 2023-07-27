import HomeTitle from "./components/ContentComp/HomeTitle";
import HomeGrid from "./components/ContentComp/HomeGrid";
import { fetchData } from "../app/utils/dataFetchingKit";

interface GameBrief {
  id: number;
  thumbnail: string | undefined;
  title: string;
  genre: string;
  release_date: string | null;
  platform: string | undefined;
}

const url = `https://${process.env.HOST}/games`;

export default async function Home() {
  const games: GameBrief[] = await fetchData(url);

  return (
    <>
      <HomeTitle />
      <HomeGrid games={games} />
    </>
  );
}
