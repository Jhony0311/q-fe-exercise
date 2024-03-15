import { useState } from "react";

import JokeCard from "./JokeCard";
import Pagination from "./Pagination";
import Loader from "./Loader";

import { useJokes } from "services/useJokes";

const PAGE_LIMIT = 10;

export default function JokesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useJokes({ page: currentPage, limit: PAGE_LIMIT });

  if (data) {
    return (
      <>
        <div className="container grid grid-cols-2 grid-flow-row max-w-5xl gap-5">
          {data.jokes.map((joke) => (
            <JokeCard
              type={joke.type}
              setup={joke.setup}
              punchline={joke.punchline}
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
      </>
    );
  }

  return (
    <div className="container">
      <Loader />
    </div>
  );
}
