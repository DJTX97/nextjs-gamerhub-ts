import Link from "next/link";
import SearchBar from "./SearchBar";
import { fetchData } from "@/app/utils/dataFetchingKit";

interface GameBrief {
  id: number;
  thumbnail: string | undefined;
  title: string;
  genre: string;
  release_date: string | null;
  platform: string | undefined;
}

const url = `https://${process.env.HOST}/games`;

const games: GameBrief[] = await fetchData(url);

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-3 2xl:py-6 bg-theme_black text-3xl sm:text-4xl 2xl:text-6xl font-bold border-b-4 border-theme rounded-b-2xl">
      <Link href={"/"}>GamerHub</Link>
      <SearchBar games={games} />
    </div>
  );
}
