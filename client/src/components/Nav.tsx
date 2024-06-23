import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/spotify";

interface Props {
  loggedIn: boolean;
}

const BACKEND_URI = "http://localhost:8888";

export default function Nav({ loggedIn }: Props) {
  const [username, setUsername] = useState<string | null>(null);
  useEffect(() => {
    if (loggedIn) {
      try {
        const fetchUser = async () => {
          console.log("fetch user");
          const user = await getUserProfile();
          setUsername(user.username);
        };
        fetchUser();
      } catch (e) {
        console.log(e);
      }
    }
  }, [loggedIn]);
  return (
    <div className="fixed top-0 z-[1000] flex h-[10vh] w-full flex-row items-center justify-between bg-emerald-700 px-8">
      <h1 className="text-2xl text-white">Fun Spotify App</h1>
      <div className="flex flex-row items-center space-x-2">
        {/* hamburger for smaller screens */}
        <Popover className="flex sm:hidden">
          <PopoverButton className="focus:outline-none">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="flex flex-col rounded-xl bg-black p-4 text-white"
          >
            {loggedIn ? (
              <div className="w-full divide-y">
                <p className="flex flex-row items-center text-base text-white">
                  {username ? username : "Connected"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </p>
                <a href={`${BACKEND_URI}/logout`} className="">
                  Logout
                </a>
              </div>
            ) : (
              <a href={`${BACKEND_URI}/login`} className="">
                Connect
              </a>
            )}
          </PopoverPanel>
        </Popover>
        {/* larger screens */}
        <div className="hidden sm:flex">
          {loggedIn ? (
            <div className="flex flex-row items-center space-x-2">
              <p className="flex flex-row items-center text-base text-white">
                {username ? username : "Connected"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              <a
                href={`${BACKEND_URI}/logout`}
                className="rounded-md bg-black px-4 py-2 text-base text-white duration-100 hover:cursor-pointer hover:bg-white hover:text-black"
              >
                Logout
              </a>
            </div>
          ) : (
            <a
              href={`${BACKEND_URI}/login`}
              className="rounded-md bg-white px-4 py-2 text-base duration-100 hover:cursor-pointer hover:bg-black hover:text-white"
            >
              Connect
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
