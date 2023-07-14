"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);
  return (
    <div className="h-[1000px] 2xl:h-[1500px] w-full mx-10 py-40 flex flex-col items-center gap-8 rounded-2xl">
      <div className="text-center font-bold text-5xl">Resource not found!</div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex items-center">
          <button
            onClick={reset}
            className="w-60 max-h-[3rem] px-6 py-2 2xl:py-1 rounded-full bg-theme_medium_violet hover:bg-theme_light_violet text-white font-bold 2xl:text-3xl"
          >
            Try again
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="w-60 max-h-[3rem] px-6 py-2 2xl:py-1 rounded-full bg-theme_medium_violet hover:bg-theme_light_violet text-white font-bold 2xl:text-3xl"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
}
