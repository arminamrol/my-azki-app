import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/userStore";

export function useProtectRoutes() {
  const navigate = useNavigate();
  const user = useAppStore((state) => state.user);
  const isLogin = !!user;
  const location = useLocation();
  const pathName = location.pathname;
  useEffect(() => {
    if (pathName !== "/" && !isLogin) {
      navigate("/");
    }
  }, [isLogin, pathName]);
}
