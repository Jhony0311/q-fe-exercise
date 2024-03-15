import axios from "axios";
import { Joke } from "types/jokes";

const client = axios.create();

export type CollectionParams = {
  page: number;
  limit: number;
  type?: string;
};

export type GetJokesResponse = {
  jokes: Array<Joke>;
  page: number;
  perPage: number;
  total: number;
};

export async function getJokes({
  page,
  limit,
  type = "",
}: CollectionParams & { type?: string }) {
  const res = await client.get<GetJokesResponse>(`/jokes/${type}`, {
    params: {
      page,
      limit,
    },
  });
  return res.data;
}
