import { useProtectRoutes } from "./useProtectRoutes";
import { useSyncTabs } from "./useSyncTabs";

export function useInitHooks() {
  useProtectRoutes();
  useSyncTabs();
}
