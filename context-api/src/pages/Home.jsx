// components
import { ChangeCounter } from '../components/ChangeCounter';
import { ChangeTitleColorButton } from '../components/ChangeTitleColorButton';

// simple
import { useCounterContext } from '../hooks/useCounterContext';

// complex
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export function Home() {
  // simple
  const { counter } = useCounterContext();

  // complex
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Homepage</h1>

      {counter}

      <ChangeCounter />

      {/* Change Context Area */}
      <ChangeTitleColorButton />
    </div>
  );
}
