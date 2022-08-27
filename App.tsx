import { useState } from "react";
import Header from "./Header";

export default function App(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <Header />
      <p>{"Click to increment the counter!"}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
}
