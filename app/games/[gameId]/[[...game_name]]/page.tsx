import GamePage from "@/app/components/ContentComp/GamePage";
import { UrlParams } from "@/app/utils/interfaces";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b0acde6584msha832426d698a50bp1da0c3jsn4f8fd02f7e5a",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
  next: {
    revalidate: 300,
  },
};

export default async function Game({ params }: UrlParams) {
  const url = `https://mmo-games.p.rapidapi.com/game?id=${params.gameId}`;

  const fetchData = async () => {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await res.json();
    return data;
  };

  const item = await fetchData();
  // console.log(item);

  return <GamePage params={params} item={item} />;
}
