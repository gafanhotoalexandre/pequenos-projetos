import { createContext } from 'react';

export const TitleColorContext = createContext();

export function TitleColorContextProvider({ children }) {
  return (
    <TitleColorContext.Provider>
      { children }
    </TitleColorContext.Provider>
  );
}
