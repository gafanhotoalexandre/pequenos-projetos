import { useContext } from "react";
import { ChangeCounter } from "../components/ChangeCounter";

import { CounterContext } from "../context/CounterContext";

export function Contact() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Contact page</h1>

      { counter }

      <ChangeCounter />
    </div>
  );
}
