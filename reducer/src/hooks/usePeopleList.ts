import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'

type Person = {
  id: string;
  name: string;
};

type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  }
};

const initialState: Person[] = [];

function reducer(state: Person[], action: ActionType) {
  switch(action.type) {
    case 'ADD':
      if (!action.payload?.name) break;

      const newState = [...state];
      // adicionando pessoa
      newState.push({
        id: uuidv4(),
        name: action.payload?.name
      });
      return newState;
    case 'DEL':
      if (!action.payload?.id) break;

      // removendo pessoa
      state = state.filter(item => item.id !== action.payload?.id);
    break;
    case 'ORDER':
      state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
    break;
  }
  return state;
}

export function usePeopleList() {
  return useReducer(reducer, initialState);
}
