import { createContext, useState } from "react";

type CursorSize = "normal" | "large";

interface CursorSizeContext {
  cursorSize: string;
  setCursorSize: (cursorSize: CursorSize) => void;
}

interface CursorProviderProps {
  children: React.ReactNode;
}

const contextDefaultValues: CursorSizeContext = {
  cursorSize: "normal",
  setCursorSize: () => {},
};

const CursorSizeContext = createContext(contextDefaultValues);

const CursorSizeProvider = ({ children }: CursorProviderProps) => {
  const [cursorSize, setCursorSize] = useState("normal");

  return (
    <CursorSizeContext.Provider value={{ cursorSize, setCursorSize }}>
      {children}
    </CursorSizeContext.Provider>
  );
};

export { CursorSizeContext, CursorSizeProvider };
