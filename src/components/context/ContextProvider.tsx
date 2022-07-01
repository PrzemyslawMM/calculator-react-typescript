import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const StateContext = createContext();

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [foo, setFoo] = useState<number>();
  return (
    <StateContext.Provider value={{ foo, setFoo }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
