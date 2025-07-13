import { useNavigate } from "react-router-dom";
import logo from "~/icons/logo.svg";
import userIcon from "~/icons/user.svg";
import { useAppStore } from "../../../store/userStore";

export function Header() {
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <header className="z-10">
      <nav className="flex items-center justify-between">
        <img
          className="cursor-pointer"
          onClick={goToHome}
          alt="logo"
          src={logo}
        />

        <h1 className="hidden lg:block text-lg font-bold">
          سامانه مقایسه و خرید آنلاین بیمه
        </h1>
        <div className="flex items-center space-x-2">
          <span>
            {user ? (
              <div className="flex items-center space-x-2">
                <img src={userIcon} alt="user-icon" width={16} height={16} />
                <p className="text-sm">
                  {user.firstName} {user.lastName}
                </p>
              </div>
            ) : (
              <button className="cursor-pointer" onClick={goToHome}>
                ثبت نام
              </button>
            )}
          </span>
          {user && (
            <button
              className="rounded-4xl text-sm text-white items-center justify-center bg-red-500 px-4 py-1 cursor-pointer"
              onClick={logout}
            >
              خروج
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
