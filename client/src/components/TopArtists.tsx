import { useEffect, useState } from "react";
import { getTop10Artists } from "../utils/spotify";
import { Timeframe, spotifyArtist } from "../utils/types";

interface Props {
  timeframe: Timeframe;
  className?: string;
}

export default function TopArtists({ timeframe, className }: Props) {
  const [topArtists, setTopArtists] = useState<spotifyArtist[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    try {
      const fetchArtists = async () => {
        console.log("artist timeframe " + timeframe.paramString);
        const artists = await getTop10Artists(timeframe.paramString);
        setTopArtists(artists);
      };
      fetchArtists();
    } catch (e) {
      console.log(e);
    }
  }, [timeframe]);
  return (
    <div
      className={`flex w-full flex-col items-center rounded-lg px-16 py-8 text-emerald-700 md:items-start ${className}`}
    >
      <h2 className="self-center text-lg font-bold">Top Artists</h2>
      <ol className="list-outside list-decimal space-y-2 text-lg">
        {topArtists.slice(0, showMore ? 10 : 5).map((artist, idx) => {
          return (
            <li key={idx} className="w-full">
              <div className="inline-flex items-center space-x-2 align-middle">
                <img
                  src={artist.images[0].url}
                  height={36}
                  width={36}
                  className="rounded-full"
                />
                <p>{artist.name}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <button onClick={toggleShowMore} className="pt-2">
        {showMore ? (
          <div className="flex space-x-1">
            <p className="text-lg">View Less</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        ) : (
          <div className="flex space-x-1">
            <p className="text-lg">View More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}
