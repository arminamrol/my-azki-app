import { useEffect } from "react";
import { useAppStore } from "../../../store/userStore";
import { RegistrationForm } from "../../forms/RegistrationFrom";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const user = useAppStore((state) => state.user);
  const isUserLogin = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLogin) {
      navigate("/select-insurance");
    }
  }, [isUserLogin]);

  return (
    <div className="page-content">
      <RegistrationForm />
    </div>
  );
};
