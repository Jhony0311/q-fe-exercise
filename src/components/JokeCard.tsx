import { Joke } from "types/joke";

export type JokeCardProps = Joke;

export default function JokeCard({
  type,
  setup,
  punchline,
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
        <span className="text-[11px] rounded-full py-1 px-3 bg-indigo-500 text-white font-bold font-sans uppercase">
          {type}
        </span>
        <div className="mt-8 font-serif">
          <p className="text-lg mb-4 font-medium">{setup}</p>
          <p className="text-md font-medium">{punchline}</p>
        </div>
      </div>
    </article>
  );
}
