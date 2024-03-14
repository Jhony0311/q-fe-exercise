import { useState } from "react";
import JokesList from "./components/JokesList";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex items-center flex-col w-full py-5">
      <h1 className="font-sans mb-8 text-4xl font-bold">Jokes directory</h1>
      <JokesList />
      <Pagination
        className="mt-12"
        currentPage={currentPage}
        total={5}
        limit={10}
        onPaginationChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
