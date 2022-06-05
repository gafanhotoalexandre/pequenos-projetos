// components
import { ChangeCounter } from "../components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";

export function Contact() {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Contact page</h1>

      { counter }

      <ChangeCounter />
    </div>
  );
}
