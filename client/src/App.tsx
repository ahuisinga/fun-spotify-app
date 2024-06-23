import { useEffect, useState } from "react";
import TopTracks from "./components/TopTracks";
import Nav from "./components/Nav";
import TopArtists from "./components/TopArtists";
import TopGenres from "./components/TopGenres";
import { token } from "./utils/spotify";
import TimeframePicker, { timeframes } from "./components/TimeframePicker";
import { Timeframe } from "./utils/types";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState<Timeframe>(timeframes[1]);
  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <div className="mt-[10vh] w-full">
      <Nav loggedIn={accessToken ? true : false} />
      {accessToken ? (
        <div className="grid w-full grid-cols-1 gap-3 p-3 md:grid-cols-2">
          <TimeframePicker
            selected={timeframe}
            setSelected={setTimeframe}
            className="text-white sm:bg-black/50 md:col-span-2"
          />
          <TopTracks timeframe={timeframe} className="bg-stone-200" />
          <TopArtists timeframe={timeframe} className="bg-stone-200" />
          <TopGenres
            timeframe={timeframe}
            className="bg-stone-200 md:col-span-2"
          />
        </div>
      ) : (
        <div className="flex min-h-[90vh] w-full flex-col items-center justify-center">
          <p>Connect to your Spotify account to see your data.</p>
        </div>
      )}
    </div>
  );
}

export default App;
