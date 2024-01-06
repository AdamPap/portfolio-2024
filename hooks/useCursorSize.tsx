import { CursorSizeContext } from "@/contexts/CursorSizeContext";
import { useContext } from "react";

export const useCursorSize = () => {
  const { cursorSize, setCursorSize } = useContext(CursorSizeContext);

  // add both handlers in the hook so that
  // we don't have to add them to every component
  // that uses the cursor
  const handleMouseEnter = () => {
    setCursorSize("large");
  };

  const handleMouseLeave = () => {
    setCursorSize("normal");
  };

  if (!cursorSize || !setCursorSize) {
    throw new Error("useCursorSize must be used within a CursorSizeProvider");
  }

  return { cursorSize, setCursorSize, handleMouseEnter, handleMouseLeave };
};
