import Link from "next/link";
import SearchBar from "./SearchBar";
import { GameBrief } from "@/app/utils/interfaces";
import { fetchData } from "@/app/utils/dataFetchingKit";

const url = "https://mmo-games.p.rapidapi.com/games";

const games: GameBrief[] = await fetchData(url);

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-3 2xl:py-6 bg-theme_black text-3xl sm:text-4xl 2xl:text-6xl font-bold border-b-4 border-theme rounded-b-2xl">
      <Link href={"/"}>GamerHub</Link>
      <SearchBar games={games} />
    </div>
  );
}
