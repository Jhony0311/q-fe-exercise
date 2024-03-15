import {
  DefaultBodyType,
  HttpResponse,
  PathParams,
  StrictRequest,
  delay,
  http,
} from "msw";
import dJokes from "../data/jokes.json";
import { Joke } from "types/jokes";

const jokes = new Map<number, Joke>();

let lastId = 1;

dJokes.forEach((joke) => {
  jokes.set(lastId, {...joke, id: lastId});
  lastId++;
});

const collection = {
  items: jokes,
  getAll: function () {
    return Array.from(this.items).map(([, joke]) => joke);
  },
  getByPage: function (page: number, limit: number, group?: Array<Joke>) {
    const base = group ?? this.getAll();
    const totalJokes = base.length;
    const totalPages = Math.ceil(totalJokes / limit);

    // Validate page number
    if (page < 1 || page > totalPages) {
      return {
        slice: [],
        total: totalJokes,
      };
    }

    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, totalJokes);
    return {
      slice: base.slice(startIndex, endIndex),
      total: base.length,
    };
  },
  getByType: function (page: number, limit: number, type: string) {
    const filteredJokes = this.getAll().filter((j) => j.type === type);
    console.log({ filteredJokes });

    return this.getByPage(page, limit, filteredJokes);
  },
};

const collectionHandler = async ({
  request,
  params,
}: {
  request: StrictRequest<DefaultBodyType>;
  params: PathParams;
}) => {
  const url = new URL(request.url);

  const reqPage = url.searchParams.get("page");
  const reqLimit = url.searchParams.get("limit");
  const { typeId } = params;

  await delay();

  const limit = typeof reqLimit === "string" ? parseInt(reqLimit) : 10;
  const page = typeof reqPage === "string" ? parseInt(reqPage) : 1;

  if (typeId && typeof typeId === "string") {
    const result = collection.getByType(page, limit, typeId);
    return HttpResponse.json({
      jokes: result.slice,
      page,
      perPage: limit,
      total: result.total,
    });
  }

  const result = collection.getByPage(page, limit);

  return HttpResponse.json({
    jokes: result.slice,
    page,
    perPage: limit,
    total: result.total,
  });
};

export const handlers = [
  http.get("/jokes", collectionHandler),
  http.get("/jokes/:typeId", collectionHandler),
];
