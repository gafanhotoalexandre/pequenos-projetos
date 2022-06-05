// components
import { ChangeCounter } from "../components/ChangeCounter";

import { useCounterContext } from '../hooks/useCounterContext';

export function About() {
  const { counter } = useCounterContext();

  return(
    <div>
      <h1>About page</h1>

      { counter }

      <ChangeCounter />
    </div>
  );
}
