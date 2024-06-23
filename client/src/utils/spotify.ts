import axios from "axios";
import { SpotifyUser, spotifyArtist, spotifyTrack } from "./types";

const EXPIRATION_TIME = 3600; // in seconds

export const getLocalAccessToken = (): string | null =>
  document.cookie
    .split("; ")
    .find((row) => row.startsWith("access_token="))
    ?.split("=")[1] ?? null;
export const getLocalRefreshToken = (): string | null =>
  document.cookie
    .split("; ")
    .find((row) => row.startsWith("refresh_token="))
    ?.split("=")[1] ?? null;

const refreshAccessToken = async () => {
  console.log("refresh access token");
  try {
    const { data } = await axios.get(
      `http://localhost:8888/refresh_token?refresh_token=${getLocalRefreshToken()}`,
    );
    const { access_token } = data;
    document.cookie = `access_token=${access_token}; max-age=${EXPIRATION_TIME}`;
    return;
  } catch (e) {
    console.error(e);
  }
};

export const getAccesstoken = (): string | null => {
  console.log("getAccesstoken");
  let localAccessToken = getLocalAccessToken();
  // means expired or never authenticated
  if (!localAccessToken) {
    // no refresh token means never authenticated
    if (!getLocalRefreshToken()) {
      return null;
    } else {
      // refresh the access token and set it
      refreshAccessToken();
      localAccessToken = getLocalAccessToken();
    }
  }
  return localAccessToken;
};

export const token: string | null = getAccesstoken();

const spotifyClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const getTop10Tracks = async (timeframe: string = "medium_term") => {
  console.log("getTop10Tracks");
  const { data } = await spotifyClient.get(
    `/me/top/tracks?time_range=${timeframe}&limit=10&offset=0`,
  );
  const tracks: spotifyTrack[] = data.items;
  return tracks;
};

export const getTop10Artists = async (timeframe: string = "medium_term") => {
  console.log("getTop10Artists");
  const { data } = await spotifyClient.get(
    `/me/top/artists?time_range=${timeframe}&limit=10&offset=0`,
  );
  const artists: spotifyArtist[] = data.items;
  return artists;
};

export const getUserProfile = async (): Promise<SpotifyUser> => {
  console.log("get user");
  const { data } = await spotifyClient.get("/me");
  return {
    username: data.display_name,
  };
};

export const getTopGenres = (artists: spotifyArtist[], count: number) => {
  const genreMap: { [genre: string]: number } = {};
  artists.forEach((artist) => {
    artist.genres.forEach((genre) => {
      genreMap[genre] = genreMap[genre] ? genreMap[genre] + 1 : 1;
    });
  });
  const genreList: { genre: string; count: number }[] = Object.keys(
    genreMap,
  ).map((genre) => ({
    genre: genre
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" "),
    count: genreMap[genre],
  }));
  genreList.sort((a, b) => b.count - a.count);

  return genreList.splice(0, count);
};
