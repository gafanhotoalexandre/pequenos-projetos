import { useContext } from "react";

import { TitleColorContext } from "../context/TitleColorContext";

export function useTitleColorContext() {
  const context = useContext(TitleColorContext);

  if (!context) console.warn('Context not found');
  return context;
}
