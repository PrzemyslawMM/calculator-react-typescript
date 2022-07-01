import React, { createContext, useContext, useMemo, useState } from 'react';

interface StateContextProviderProps {
  foo: number;
  setFoo: React.Dispatch<React.SetStateAction<number>>;
}

// @ts-ignore
const StateContext = createContext<StateContextProviderProps>();

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [foo, setFoo] = useState<number>(2);

  const memorizedValue = useMemo(() => ({ foo, setFoo }), [foo, setFoo]);

  return (
    <StateContext.Provider value={memorizedValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
