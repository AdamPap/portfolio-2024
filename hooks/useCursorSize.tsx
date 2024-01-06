import { CursorSizeContext } from "@/contexts/CursorSizeContext";
import { useContext } from "react";

export const useCursorSize = () => {
  const context = useContext(CursorSizeContext);

  if (!context) {
    throw new Error("useCursorSize must be used within a CursorSizeProvider");
  }

  return context;
};
