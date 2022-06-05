// components
import { ChangeCounter } from "../components/ChangeCounter";
import { ChangeTitleColorButton } from "../components/ChangeTitleColorButton";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

export function Contact() {
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color }}>Contact page</h1>

      { counter }

      <ChangeCounter />

      <ChangeTitleColorButton />
    </div>
  );
}
