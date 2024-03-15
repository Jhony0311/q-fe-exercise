import { type CollectionParams } from "./api";

export const jokesQueries = {
  all: () => [{ scope: "jokes" }] as const,
  lists: () => [{ ...jokesQueries.all()[0], entity: "list" }] as const,
  list: (filter: CollectionParams) => [{ ...jokesQueries.lists()[0], filter }],
};
