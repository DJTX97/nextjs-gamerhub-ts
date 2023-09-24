import GamePage from "@/app/components/ContentComp/GamePage";
import { fetchData } from "@/app/utils/dataFetchingKit";

interface GamePageParams {
    params: {
      gameId: string;
      game_name: string[];
    };
  }

export default async function Game({ params }: GamePageParams) {
  const url = `https://${process.env.HOST}/game?id=${params.gameId[0]}`;

  const data = await fetchData(url);
  //console.log(params);
  //console.log(data)
  return <GamePage params={params} game={data} />;
}
