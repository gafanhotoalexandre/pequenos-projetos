// components
import { ChangeCounter } from '../components/ChangeCounter';

// simple
import { useCounterContext } from '../hooks/useCounterContext';

// complex
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export function Home() {
  // simple
  const { counter } = useCounterContext();

  // complex
  // ...

  return (
    <div>
      <h1>Homepage</h1>

      {counter}

      <ChangeCounter />
    </div>
  );
}
