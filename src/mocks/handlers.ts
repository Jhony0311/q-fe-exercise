import { HttpResponse, delay, http } from "msw";
import dJokes from "../data/jokes.json";

const jokes = new Map<
  number,
  {
    type: string;
    setup: string;
    punchline: string;
  }
>();

let lastId = 1;

dJokes.forEach((joke) => {
  jokes.set(lastId, joke);
  lastId++;
});

const collection = {
  items: jokes,
  getAll: function () {
    return Array.from(this.items).map(([, joke]) => joke);
  },
  getById: function (id: number) {
    return this.items.get(id);
  },
  getByPage: function (page: number, limit: number) {
    const totalJokes = this.items.size;
    const totalPages = Math.ceil(totalJokes / limit);

    // Validate page number
    if (page < 1 || page > totalPages) {
      return [];
    }

    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, totalJokes);
    return this.getAll().slice(startIndex, endIndex);
  },
  getByType: function (page: number, limit: number, type: string) {
    const filteredJokes = this.getAll().filter((j) => j.type === type);

    const totalJokes = filteredJokes.length;
    const totalPages = Math.ceil(totalJokes / limit);

    // Validate page number
    if (page < 1 || page > totalPages) {
      return [];
    }

    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, totalJokes);
    return filteredJokes.slice(startIndex, endIndex);
  },
};

export const handlers = [
  http.get("/jokes", async ({ request }) => {
    const url = new URL(request.url);

    const reqPage = url.searchParams.get("page");
    const reqLimit = url.searchParams.get("limit");

    await delay();

    if (typeof reqPage !== "string") {
      return HttpResponse.json({
        jokes: collection.getAll(),
        page: 1,
        perPage: collection.items.size,
      });
    }

    const page = parseInt(reqPage);
    const limit = typeof reqLimit === "string" ? parseInt(reqLimit) : 10;

    return HttpResponse.json({
      jokes: collection.getByPage(page, limit),
      page,
      perPage: limit,
      total: collection.items.size,
    });
  }),
];
