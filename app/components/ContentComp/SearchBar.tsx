"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameBrief } from "@/app/utils/interfaces";
import Link from "next/link";

interface Props {
  games: GameBrief[];
  suggestions?: GameBrief[];
}
export default function SearchBar({games}:Props) {
  const router = useRouter(); //for navigating to other pages
  const [inputValue, setInputValue] = useState<string>(""); //input field state
  const [suggestions, setSuggestions] = useState<GameBrief[]>([]); //suggestion list state


  //track input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  //update suggestions function
  const updateSuggestions = () => {
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredGames.slice(0, 5));
  };

  //search button functionality
  const handleSearchButtonClick = () => {
    const searchQuery = inputValue.trim();
    if (searchQuery !== "") {
      const matchingGame = games.find(
        (game) => game.title.toLowerCase() === inputValue.toLowerCase()
      );
      if (matchingGame) {
        router.push(`/games/${matchingGame.id}/${matchingGame.title.replace(/ /g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`);
        console.log(matchingGame);
      } else {
        router.push(`/missing`);
      }
    }
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchButtonClick();
    }
  };

  //hide suggestions after clicking on the page
  const handleClickOutside = () => {
    setInputValue("");
  };

  //update suggestions + hide suggestions after clicking on the page
  useEffect(() => {
    updateSuggestions();

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputValue]);

  return (
    <div className="text-[18px] 2xl:text-2xl font-normal text-theme_black">
      <div className="h-9 2xl:h-12 flex">
        <button
          className="w-10 h-full md:w-14 flex justify-center items-center bg-theme_light_gray hover:bg-theme_medium_gray rounded-l-full"
          onClick={handleSearchButtonClick}
        >
          <svg
            className="h-6 2xl:h-8 fill-current text-theme_white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          className="w-32 md:w-56 2xl:w-80 pl-2 focus:outline-none rounded-r-full"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setInputValue("")}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      {inputValue !== "" && suggestions.length > 0 && (
        <div className="absolute right-6 md:right-auto z-10 w-60 mt-1">
          <ul className="rounded-xl bg-theme_white">
            {suggestions.map((game) => (
              <Link
                href={`/games/${game.id}/${game.title.replace(/ /g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`}
                onClick={() => setInputValue("")}
                key={game.id}
              >
                <li className="px-3 2xl:py-3 rounded-xl hover:bg-theme_light_gray">
                  {game.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
