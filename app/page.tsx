import HomeTitle from "./components/ContentComp/HomeTitle";
import HomeGrid from "./components/ContentComp/HomeGrid";
import { fetchData } from "../app/utils/dataFetchingKit";

const url = `https://${process.env.HOST}/games`;

export default async function Home() {
  const games = await fetchData(url);

  return (
    <>
      <HomeTitle />
      <HomeGrid games={games} />
    </>
  );
}
