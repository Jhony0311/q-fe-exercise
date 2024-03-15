import { useState } from "react";

import JokeCard from "./JokeCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import Pill from "./Pill";
import Button from "./Button";

import { useJokes } from "services/useJokes";

const PAGE_LIMIT = 10;

export default function JokesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const { data } = useJokes({
    page: currentPage,
    limit: PAGE_LIMIT,
    type: filter,
  });

  const clearFilter = () => {
    setFilter(undefined);
    setCurrentPage(1);
  };

  if (data) {
    if (data.jokes.length === 0) {
      return (
        <div className="container max-w-5xl">
          <h2>No fun here, no jokes were found</h2>
        </div>
      );
    }
    return (
      <div className="container flex flex-col">
        {filter && (
          <div className="bg-zinc-50 mb-8 py-3 px-4 rounded-md">
            <p className="font-md mb-4">
              Filtering by: <Pill>{filter}</Pill>
            </p>
            <Button onClick={clearFilter}>Clear filters</Button>
          </div>
        )}
        <div className="container grid grid-cols-2 grid-flow-row max-w-5xl gap-5 mx-auto">
          {data.jokes.map((joke) => (
            <JokeCard
              key={joke.id}
              type={joke.type}
              setup={joke.setup}
              punchline={joke.punchline}
              onSelectType={(type) => {
                setFilter(type);
                setCurrentPage(1);
              }}
            />
          ))}
        </div>
        <Pagination
          className="mt-12"
          currentPage={currentPage}
          total={data.total}
          limit={PAGE_LIMIT}
          onPaginationChange={(page) => setCurrentPage(page)}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <Loader />
    </div>
  );
}
