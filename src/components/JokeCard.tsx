import Pill from "./Pill";

import { Joke } from "types/jokes";

export type JokeCardProps = Omit<Joke, "id"> & {
  onSelectType: (type: string) => void;
};

export default function JokeCard({
  type,
  setup,
  punchline,
  onSelectType,
}: JokeCardProps) {
  return (
    <article className="max-w-md bg-white rounded-lg px-12 py-10 shadow-md shadow-purple-300 ring-3 relative overflow-hidden">
      <span
        aria-hidden
        className="absolute -bottom-3 -right-3 text-6xl z-0 opacity-20 select-none"
      >
        🤣
      </span>
      <div className="relative">
        <button className="appearance-none" onClick={() => onSelectType(type)}>
          <Pill>{type}</Pill>
        </button>
        <div className="mt-8 font-serif">
          <p className="text-lg mb-4 font-medium">{setup}</p>
          <p className="text-md font-medium">{punchline}</p>
        </div>
      </div>
    </article>
  );
}
