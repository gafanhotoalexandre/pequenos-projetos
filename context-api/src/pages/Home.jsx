import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

export function Home() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      Homepage: {counter}
    </div>
  );
}
