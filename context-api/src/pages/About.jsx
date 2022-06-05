import { useContext } from "react";
import { ChangeCounter } from "../components/ChangeCounter";

import { CounterContext } from "../context/CounterContext";

export function About() {
  const { counter } = useContext(CounterContext);

  return(
    <div>
      <h1>About page</h1>

      { counter }

      <ChangeCounter />
    </div>
  );
}
