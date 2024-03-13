import JokesList from "./components/JokesList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="flex items-center flex-col w-full">
      <JokesList />
      <Pagination className="mt-12" />
    </div>
  );
}

export default App;
