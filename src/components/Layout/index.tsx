import { Outlet } from "react-router-dom";
import carIcon from "~/icons/car-green.svg";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="lg:max-w-7xl flex mx-auto overflow-x-hidden">
      <div className="w-full p-4 flex flex-col">
        <Header />
        <main className="lg:mt-20 mt-10 z-10 lg:px-8">
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
