"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface GamePageProps {
  params: {
    gameId: string;
    game_name: string[];
  };
  game: {
    id: number;
    title: string;
    screenshots: Array<{ id: number; image: string }> | null;
    developer: string | undefined;
    publisher: string | undefined;
    platform: string | undefined;
    short_description: string;
    minimum_system_requirements: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    } | null;
    game_url: string;
  };
}

export default function GamePage({ game, params }: GamePageProps) {
  const router = useRouter();

  const [gameName, setGameName] = useState<string>(
    game.title.replace(/ /g, "_").replace(/[^a-zA-Z0-9_]/g, "")
  );
  const [givenName, setGivenName] = useState<string>(params.gameId[1]);
  const handleRouteChange = () => {
    router.replace(`/games/${params.gameId[0]}/${gameName}`);
  };

  useEffect(() => {
    if (givenName !== gameName || params.gameId.length !== 2) {
      handleRouteChange();
    }
  }, []);

  const {
    screenshots,
    title,
    developer,
    publisher,
    platform,
    short_description,
    game_url,
  } = game;

  const { os, processor, memory, graphics, storage } =
    game.minimum_system_requirements || {};

  return (
    <div className="flex flex-col w-full">
      <img
        className="h-60 sm:h-72 md:h-96 2xl:h-[40rem] w-4/5 md:w-3/4 2xl:w-5/6 mt-5 self-center rounded-xl"
        src={
          screenshots && screenshots.length > 0
            ? screenshots[0].image
            : "../../assets/images/placeholder.jpg"
        }
        alt=""
      />
      <div className="w-4/5 md:w-[90%] my-5 self-center border-2 border-theme rounded-full" />
      <div className="flex flex-col gap-8 mx-10 mb-10 text-2xl 2xl:mx-20">
        <div className="text-4xl font-bold md:text-5xl xl:text-6xl">
          {title}
        </div>
        <div className="flex flex-col gap-2 font-bold">
          <div className="flex flex-col items-baseline md:flex-row 2xl:text-4xl">
            Developer:&nbsp;
            <div className="text-xl font-normal 2xl:text-3xl">
              {developer ? developer : "N/A"}
            </div>
          </div>
          <div className="flex flex-col items-baseline md:flex-row 2xl:text-4xl">
            Publisher:&nbsp;
            <div className="text-xl font-normal 2xl:text-3xl">
              {publisher ? publisher : "N/A"}
            </div>
          </div>
          <div className="flex flex-col items-baseline md:flex-row 2xl:text-4xl">
            Platform:&nbsp;
            <div className="text-xl font-normal 2xl:text-3xl">
              {platform ? platform : "N/A"}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-bold 2xl:text-4xl">
          Description:&nbsp;
          <div className="text-xl font-normal 2xl:text-3xl">
            {short_description ? short_description : "N/A"}
          </div>
        </div>
        <div className="font-bold 2xl:text-4xl">
          Minimum system requirements:
          {game.minimum_system_requirements ? (
            <div className="flex flex-col gap-2 mt-5 text-xl sm:gap-1 2xl:gap-4 md:mt-4 md:px-5">
              <div className="flex flex-col items-baseline sm:flex-row 2xl:text-3xl">
                OS:&nbsp;
                <div className="text-lg font-normal sm:text-xl 2xl:text-3xl">
                  {os ? os : "N/A"}
                </div>
              </div>
              <div className="flex flex-col items-baseline sm:flex-row 2xl:text-3xl">
                Processor:&nbsp;
                <div className="text-lg font-normal sm:text-xl 2xl:text-3xl">
                  {processor ? processor : "N/A"}
                </div>
              </div>
              <div className="flex flex-col items-baseline sm:flex-row 2xl:text-3xl">
                RAM:&nbsp;
                <div className="text-lg font-normal sm:text-xl 2xl:text-3xl">
                  {memory ? memory : "N/A"}
                </div>
              </div>
              <div className="flex flex-col items-baseline sm:flex-row 2xl:text-3xl">
                Graphics card:&nbsp;
                <div className="text-lg font-normal sm:text-xl 2xl:text-3xl">
                  {graphics ? graphics : "N/A"}
                </div>
              </div>
              <div className="flex flex-col items-baseline sm:flex-row 2xl:text-3xl">
                Storage:&nbsp;
                <div className="text-lg font-normal sm:text-xl 2xl:text-3xl">
                  {storage ? storage : "N/A"}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-3">N/A</div>
          )}
        </div>
        {game_url && (
          <div className="flex justify-center py-10 md:py-7 2xl:py-14">
            <a
              target="_blank"
              href={game_url}
              className="w-72 md:w-[30rem] px-6 py-2 2xl:py-5 rounded-full bg-theme_medium_violet hover:bg-theme_light_violet text-white font-bold 2xl:text-3xl text-center"
            >
              Try it out!
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
