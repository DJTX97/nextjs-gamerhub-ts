import Link from "next/link";

interface GameCardProps {
  id: number;
  thumbnail: string | undefined;
  title: string;
  genre: string;
  release_date: string | null;
  platform: string | undefined;
}

export default function GameCard({
  title,
  genre,
  thumbnail,
  release_date,
  platform,
  id,
}: GameCardProps) {
  return (
    <Link
      href={`/games/${id}/${title
        .replace(/ /g, "_")
        .replace(/[^a-zA-Z0-9_]/g, "")}`}
      className="flex flex-col justify-center h-72 2xl:h-[30rem] hover:opacity-80 hover:scale-105 transition-all duration-[150ms]"
    >
      <img
        className="w-full h-1/2 rounded-t-xl"
        src={thumbnail ? thumbnail : "../../assets/images/placeholder.jpg"}
        loading="lazy"
        alt=""
      />
      <div className="h-1/2 w-full flex flex-col px-2 py-1 sm:py-2 bg-theme_dark_gray rounded-b-xl text-[15px]">
        <div className="text-2xl font-bold 2xl:mb-2 2xl:text-5xl">{title}</div>
        <div className="2xl:text-3xl">
          Genre: <span className="font-bold">{genre}</span>
        </div>
        <div className="2xl:text-3xl">
          Platform: <span className="font-bold">{platform}</span>
        </div>
        <div className="2xl:text-3xl">
          Release date: <span className="font-bold">{release_date}</span>
        </div>
      </div>
    </Link>
  );
}
