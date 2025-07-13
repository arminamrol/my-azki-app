import { Outlet, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/userStore";
import logo from "~/icons/logo.svg";
import carIcon from "~/icons/car-green.svg";

export function Layout() {
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="lg:max-w-7xl flex mx-auto overflow-x-hidden">
      <div className="w-full p-4 flex flex-col">
        <header className="z-10">
          <nav className="flex items-center justify-between">
            <img
              className="cursor-pointer"
              onClick={goToHome}
              alt="logo"
              src={logo}
            />

            <h1 className="hidden lg:block text-lg">
              سامانه مقایسه و خرید آنلاین بیمه
            </h1>
            <div className="flex items-center space-x-2">
              <span>
                {user ? (
                  `${user.firstName} ${user.lastName}`
                ) : (
                  <button className="cursor-pointer" onClick={goToHome}>
                    ثبت نام
                  </button>
                )}
              </span>
              {user && (
                <button
                  className="rounded-4xl text-white items-center justify-center bg-red-500 px-4 py-2 cursor-pointer"
                  onClick={logout}
                >
                  خروج
                </button>
              )}
            </div>
          </nav>
        </header>

        <main className="lg:mt-20 mt-10 z-10">
          <Outlet />
        </main>

        <div className="fixed bottom-0 left-0 flex items-end flex-col">
          <img
            src={carIcon}
            className="ml-4 lg:min-w-[50dvw] w-[70dvw] self-end lg:absolute lg:left-4 lg:bottom-10 z-10"
          />
          <div className="bg-amber-50  w-dvw h-[30dvh] lg:h-dvh lg:w-[30dvw] z-0"></div>
        </div>
      </div>
    </div>
  );
}
