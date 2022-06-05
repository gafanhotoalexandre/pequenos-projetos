import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();

export function titleColorReducer(state, action) {
  // switch
}

export function TitleColorContextProvider({ children }) {
  const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' });

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      { children }
    </TitleColorContext.Provider>
  );
}
