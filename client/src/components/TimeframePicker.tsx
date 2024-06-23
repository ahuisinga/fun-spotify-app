import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { Timeframe } from "../utils/types";

interface Props {
  selected: Timeframe;
  setSelected: React.Dispatch<React.SetStateAction<Timeframe>>;
  className?: string;
}

export const timeframes: Timeframe[] = [
  { label: "4 Weeks", paramString: "short_term" },
  { label: "6 Months", paramString: "medium_term" },
  { label: "1 Year", paramString: "long_term" },
];

export default function TimeframePicker({
  selected,
  setSelected,
  className,
}: Props) {
  return (
    <div className={`w-full rounded-lg px-16 py-1 text-base ${className}`}>
      {/* radio buttons for larger group */}
      <RadioGroup
        value={selected ?? timeframes[1]}
        onChange={(value: Timeframe) => {
          console.log("update timeframe " + value.paramString);
          setSelected(value);
        }}
        className="hidden flex-row justify-evenly sm:flex"
      >
        {timeframes.map((timeframe) => (
          <Radio
            key={timeframe.paramString}
            value={timeframe}
            className="group cursor-pointer rounded-lg border border-transparent px-8 py-2 duration-75 hover:border-white data-[checked]:bg-white/50 data-[checked]:text-black data-[checked]:hover:border-transparent"
          >
            <p>{timeframe.label}</p>
          </Radio>
        ))}
      </RadioGroup>
      <div className="flex sm:hidden">
        <Listbox
          value={selected ?? timeframes[1]}
          onChange={(value: Timeframe) => {
            console.log("update timeframe " + value.paramString);
            setSelected(value);
          }}
        >
          <ListboxButton className="text-whitefocus:outline-none relative block w-full rounded-lg bg-black py-1.5 pl-3 pr-8 text-left text-sm/6 data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
            {selected.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className="w-[var(--button-width)] rounded-xl border border-black bg-black p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            {timeframes.map((timeframe) => (
              <ListboxOption
                key={timeframe.paramString}
                value={timeframe}
                className="group flex cursor-pointer select-none items-center gap-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="invisible size-6 group-data-[selected]:visible"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {timeframe.label}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  );
}
