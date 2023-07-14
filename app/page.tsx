import ContentTitle from "./components/ContentComp/HomeTitle";
import HomeGrid from "./components/ContentComp/HomeGrid";
import { GameBrief } from "./utils/interfaces";
import { fetchData } from "../app/utils/dataFetchingKit";

const url = `https://${process.env.HOST}/games`;

export default async function Home() {
  const games: GameBrief[] = await fetchData(url);

  return (
    <>
      <ContentTitle />
      <HomeGrid games={games} />
    </>
  );
}
