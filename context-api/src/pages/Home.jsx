import { useContext } from 'react';
import { ChangeCounter } from '../components/ChangeCounter';
import { CounterContext } from '../context/CounterContext';

export function Home() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Homepage</h1>

      {counter}

      <ChangeCounter />
    </div>
  );
}
