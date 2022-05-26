import { useState } from 'react';
import { usePeopleList } from './hooks/usePeopleList';

export default function App() {
  const [peopleList, peopleListDispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  function handleAddButton() {
    if (!nameInput) return;

    peopleListDispatch({
      type: 'ADD',
      payload: {
        name: nameInput
      }
    });
    setNameInput('');
  }

  function handleDeletePerson(id: string) {
    peopleListDispatch({
      type: 'DEL',
      payload: { id },
    })
  }

  function handleOrderButton() {
    peopleListDispatch({
      type: 'ORDER',
    });
  }

  return (
    <div className="p-5">
      <input
        type="text"
        onChange={(e) => setNameInput(e.target.value)}
        value={nameInput}
      />
      <button
        className="px-3 py-2 bg-green-500 hover:bg-green-400 transition-all text-white"
        onClick={handleAddButton}
      >Adicionar</button>

      <button
        className="px-3 py-2 bg-blue-500 hover:bg-blue-400 transition-all text-white"
        onClick={handleOrderButton}
      >Ordenar</button>

      <p className="leading-1">Lista de Pessoas:</p>
      <ul>
        { peopleList.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              onClick={() => handleDeletePerson(item.id)}
              className="px-3 py-2 bg-red-500 hover:bg-red-400 transition-all text-white"
            >[ deletar ]</button>
          </li>
        ))}
      </ul>
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
