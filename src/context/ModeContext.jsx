import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
export const useMode = () => {
  return useContext(ModeContext);
};
