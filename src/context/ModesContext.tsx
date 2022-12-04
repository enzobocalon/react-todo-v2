import React, { createContext, useState } from 'react';

interface IModes {
  mode: boolean,
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}

type ProviderProps = {
  children: React.ReactNode
}

export const ModesContext = createContext({} as IModes);

const ModesProvider = ({children}: ProviderProps) => {
  const [mode, setMode] = useState(true);

  return (
    <ModesContext.Provider
      value={{
        mode,
        setMode
      }}
    >
      {children}
    </ModesContext.Provider>
  );
};

export default ModesProvider;
