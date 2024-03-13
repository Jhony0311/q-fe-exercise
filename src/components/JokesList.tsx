import JokeCard from "./JokeCard";

export default function JokesList() {
  return (
    <div className="container grid grid-cols-2 grid-flow-row max-w-5xl gap-5">
      <JokeCard
        category="general"
        setup="A ham sandwhich walks into a bar and orders a beer. The bartender says..."
        punchline="I'm sorry, we don't serve food here"
      />
      <JokeCard
        category="general"
        setup="A ham sandwhich walks into a bar and orders a beer. The bartender says..."
        punchline="I'm sorry, we don't serve food here"
      />
      <JokeCard
        category="general"
        setup="A ham sandwhich walks into a bar and orders a beer. The bartender says..."
        punchline="I'm sorry, we don't serve food here"
      />
      <JokeCard
        category="general"
        setup="A ham sandwhich walks into a bar and orders a beer. The bartender says..."
        punchline="I'm sorry, we don't serve food here"
      />
      <JokeCard
        category="general"
        setup="A ham sandwhich walks into a bar and orders a beer. The bartender says..."
        punchline="I'm sorry, we don't serve food here"
      />
    </div>
  );
}
