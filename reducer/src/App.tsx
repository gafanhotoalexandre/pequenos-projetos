import { useState, useReducer } from 'react';

type ReducerState = {
  count: number;
};
type ReducerAction = {
  type: string;
};

const initialState: ReducerState = { count: 0 };
function reducer(state: ReducerState, action: ReducerAction) {
  switch(action.type) {
    case 'ADD':
      return {...state, count: state.count + 1};
    case 'DEL':
      if (state.count === 0) break;
      return {...state, count: state.count - 1};
    case 'RESET':
      return initialState;
  }

  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-5">
      Contagem: {state.count}
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-400 transition-all text-white rounded py-2 px-4"
        onClick={() => dispatch({ type: 'ADD' })}
      >
        Adicionar
      </button>

      <button
        className="mx-2 bg-blue-500 hover:bg-blue-400 transition-all text-white rounded py-2 px-4"
        onClick={() => dispatch({ type: 'DEL' })}
      >
        Remover
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-400 transition-all text-white rounded py-2 px-4"
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Resetar
      </button>
    </div>
  )
}
