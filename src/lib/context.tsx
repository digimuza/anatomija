import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export function createDynamicContext<T>(contextName: string) {
  const ctx = createContext<
    [T, React.Dispatch<React.SetStateAction<T>>] | null
  >(null);
  return {
    useContext: () => {
      const context = useContext(ctx);
      if (context == null)
        throw new Error(`Context "${contextName}" was not provided`);
      return context;
    },
    Provider: ({
      defaultValue,
      children,
    }: PropsWithChildren<{ defaultValue: T }>) => {
      const state = useState(defaultValue);
      return <ctx.Provider value={state}>{children}</ctx.Provider>;
    },
  };
}

export function createStaticContext<T>(contextName: string, defaultValue?: T) {
  const ctx = createContext<{ ctx: T } | null>(
    defaultValue ? { ctx: defaultValue } : null
  );
  return {
    useContext: () => {
      const context = useContext(ctx);
      if (context == null)
        throw new Error(`Context "${contextName}" was not provided`);
      return context.ctx;
    },
    Provider: ({ value, children }: PropsWithChildren<{ value: T }>) => (
      <ctx.Provider value={{ ctx: value }}>{children}</ctx.Provider>
    ),
  };
}
