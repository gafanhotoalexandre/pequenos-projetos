import { useReducer } from 'react';

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
      return {...state, count: state.count -1};
    case 'RESET':
      return initialState;
  }

  return state;
}

export function useCounter() {
  return useReducer(reducer, initialState);
}
