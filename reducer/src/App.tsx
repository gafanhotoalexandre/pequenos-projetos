export default function App() {
  return (
    <div className="p-5">
      ...
    </div>
  );
}

/*
import { useCounter } from './hooks/useCounter';

export default function App() {
  const [counter, counterDispatch] = useCounter();

  return (
    <div className="p-5">
      Contagem: {counter.count}
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-400 transition-all text-white rounded py-2 px-4"
        onClick={() => counterDispatch({ type: 'ADD' })}
      >
        Adicionar
      </button>

      <button
        className="mx-2 bg-blue-500 hover:bg-blue-400 transition-all text-white rounded py-2 px-4"
        onClick={() => counterDispatch({ type: 'DEL' })}
      >
        Remover
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-400 transition-all text-white rounded py-2 px-4"
        onClick={() => counterDispatch({ type: 'RESET' })}
      >
        Resetar
      </button>
    </div>
  )
}
*/
