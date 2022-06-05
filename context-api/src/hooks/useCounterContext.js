import { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

export function useCounterContext() {
  const context = useContext(CounterContext);

  if (!context) console.log('Context not found');
  return context;
}
