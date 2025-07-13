import { Outlet } from "react-router-dom";
import { useAppStore } from "../../store/userStore";

export function Layout() {
  const user = useAppStore((state) => state.user);

  return (
    <div className="lg:max-w-7xl flex mx-auto">
      <div className="w-full p-4 flex flex-col space-y-4 lg:space-y-8">
        <header>
          <nav className="flex items-center justify-between">
            <div>icon</div>
            <h1 className="hidden lg:block">
              سامانه مقایسه و خرید آنلاین بیمه
            </h1>{" "}
            <div>
              <span>
                {user ? `${user.firstName} ${user.lastName}` : "ثبت نام"}
              </span>
              <div></div>
            </div>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          {/* You can place the car illustration here or handle it with CSS backgrounds */}
          <div className="illustration-container">
            {/* Car SVG or img tag goes here */}
          </div>
        </footer>
      </div>
    </div>
  );
}
