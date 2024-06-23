export type spotifyTrack = {
  name: string;
  album: {
    external_urls: {
      spotify: string;
    };
    href: string;
    images: {
      url: string;
      height: number | null;
      width: number | null;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
  };
  artists: spotifyArtist[];
};

export type spotifyArtist = {
  name: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  genres: string[];
};

export type Timeframe = {
  label: string;
  paramString: string;
};

export type SpotifyUser = {
  username: string;
};
