import { useEffect, useState } from "react";
import { getTop10Artists, getTopGenres } from "../utils/spotify";
import GenreChart from "./GenreChart";
import { Timeframe } from "../utils/types";

interface Props {
  timeframe: Timeframe;
  className?: string;
}

export default function TopGenres({ timeframe, className }: Props) {
  const [topGenres, setTopGenres] = useState<
    { genre: string; count: number }[]
  >([]);
  useEffect(() => {
    try {
      const fetchGenres = async () => {
        const artists = await getTop10Artists(timeframe.paramString);
        const genres = getTopGenres(artists, 10);
        setTopGenres(genres);
      };
      fetchGenres();
    } catch (e) {
      console.log(e);
    }
  }, [timeframe]);
  return (
    <div
      className={`grid w-full grid-cols-1 gap-3 rounded-lg px-16 py-8 text-emerald-700 md:grid-cols-2 ${className}`}
    >
      <h2 className="text-center text-lg font-bold md:col-span-2">
        Top Genres
      </h2>
      <div className="flex flex-col items-center">
        <ol className="list-outside list-decimal space-y-2 text-lg">
          {topGenres.map((genre, idx) => {
            return (
              <li key={idx}>
                <p>{genre.genre}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <GenreChart topGenres={topGenres} className="py-3 md:py-0" />
    </div>
  );
}
