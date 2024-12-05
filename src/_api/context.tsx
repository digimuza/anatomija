import { createContext, useContext } from "react";
import { AppApiLocal } from "./app-api";

export const ApiContext = createContext(new AppApiLocal());

const api = new AppApiLocal();
export function ApiProvider({ children }: { children: React.ReactNode }) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApi() {
  return useContext(ApiContext);
}
