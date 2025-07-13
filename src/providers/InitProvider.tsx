import type { ReactNode } from "react";
import { useInitHooks } from "../hooks/useInitHooks";

export function InitProvider({ children }: { children: ReactNode }) {
  useInitHooks();
  return <>{children}</>;
}
