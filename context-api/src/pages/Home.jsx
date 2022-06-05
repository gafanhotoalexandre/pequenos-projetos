// components
import { ChangeCounter } from '../components/ChangeCounter';

import { useCounterContext } from '../hooks/useCounterContext';

export function Home() {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Homepage</h1>

      {counter}

      <ChangeCounter />
    </div>
  );
}
