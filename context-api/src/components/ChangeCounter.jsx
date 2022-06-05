import { useCounterContext } from '../hooks/useCounterContext';

export function ChangeCounter() {
  const {counter, setCounter} = useCounterContext();

  return (
    <div style={{ margin: '15px 0' }}>
      <button
        onClick={() => setCounter(counter + 1)}
      >Add value to counter</button>
    </div>
  );
}
