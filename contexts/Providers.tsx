"use client";

import { CursorSizeProvider } from "@/contexts/CursorSizeContext";

interface ProvidersProps {
  children: React.ReactNode;
}

// This is needed to wrap the entire app with the context providers
// since context cannot be imported in server components (root layout)
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <CursorSizeProvider>{children}</CursorSizeProvider>;
};

export { Providers };
