import { useQuery } from "@tanstack/react-query";

import { jokesQueries } from "./queryOptions";
import { CollectionParams, getJokes } from "./api";

export function useJokes(filter: CollectionParams) {
  return useQuery({
    queryKey: jokesQueries.list(filter),
    queryFn: ({ queryKey }) => getJokes(queryKey[0].filter),
  });
}
