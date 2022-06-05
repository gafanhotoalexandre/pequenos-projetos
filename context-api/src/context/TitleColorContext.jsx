import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();

const initialState = { color: 'purple' };

export function titleColorReducer(state, action) {
  switch (action.type) {
    case 'RED':
      return { ...state, color: 'red' };
    case 'AQUA':
      return { ...state, color: 'aqua' };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function TitleColorContextProvider({ children }) {
  const [state, dispatch] = useReducer(titleColorReducer, initialState);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TitleColorContext.Provider>
  );
}
