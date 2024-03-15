import JokesList from "./components/JokesList";

function App() {
  return (
    <div className="flex items-center flex-col w-full py-5">
      <h1 className="font-sans mb-14 text-4xl font-bold">Jokes directory</h1>
      <JokesList />
    </div>
  );
}

export default App;
