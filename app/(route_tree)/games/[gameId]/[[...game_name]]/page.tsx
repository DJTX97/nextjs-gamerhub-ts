import GamePage from "@/app/components/ContentComp/GamePage";
import { fetchData } from "@/app/utils/dataFetchingKit";

interface UrlParams {
    params: {
      gameId: string;
      game_name: string[];
    };
  }

export default async function Game({ params }: UrlParams) {
  const url = `https://${process.env.HOST}/game?id=${params.gameId}`;

  const data = await fetchData(url);
  // console.log(item);

  return <GamePage params={params} game={data} />;
}
