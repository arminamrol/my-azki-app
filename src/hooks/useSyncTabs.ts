import { useEffect } from "react";
import { storageKeys } from "../constants/storageKeys";

export const useSyncTabs = () => {
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKeys.ZUSTAND_STORAGE_KEY) {
        console.log("User data changed in another tab, reloading...");
        window.location.reload();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
};
