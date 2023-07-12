import Link from "next/link";
import SearchBar from "./SearchBar";
import { GameBrief } from "@/app/utils/interfaces";

const url = "https://mmo-games.p.rapidapi.com/games";
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

//Async function to fetch data from api endpoint.
const fetchData = async () => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
};

const games: GameBrief[] = await fetchData();

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-3 2xl:py-6 bg-theme_black text-3xl sm:text-4xl 2xl:text-6xl font-bold border-b-4 border-theme rounded-b-2xl">
      <Link href={"/"}>GamerHub</Link>
      <SearchBar games={games} />
    </div>
  );
}
