// components
import { ChangeCounter } from "../components/ChangeCounter";
import { ChangeTitleColorButton } from "../components/ChangeTitleColorButton";

import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export function About() {
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return(
    <div>
      <h1 style={{ color }}>About page</h1>

      { counter }

      <ChangeCounter />

      <ChangeTitleColorButton />
    </div>
  );
}
