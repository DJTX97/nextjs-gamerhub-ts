import GamePage from "@/app/components/ContentComp/GamePage";
import { UrlParams } from "@/app/utils/interfaces";
import { fetchData } from "@/app/utils/dataFetchingKit";


export default async function Game({ params }: UrlParams) {
  const url = `https://${process.env.HOST}/game?id=${params.gameId}`;

  const data = await fetchData(url);
  // console.log(item);

  return <GamePage params={params} game={data} />;
}
