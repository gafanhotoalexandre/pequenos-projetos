import { useContext } from 'react'

import { CounterContext } from '../context/CounterContext';

export function ChangeCounter() {
  const {counter, setCounter} = useContext(CounterContext);

  return (
    <div style={{ margin: '15px 0' }}>
      <button
        onClick={() => setCounter(counter + 1)}
      >Add value to counter</button>
    </div>
  );
}
