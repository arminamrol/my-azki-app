import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { SelectInsurancePage } from "../components/pages/SelectInsurancePage";
import { InitProvider } from "../providers/InitProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <InitProvider>
        <Layout />
      </InitProvider>
    ),
    children: [
      {
        index: true,
        element: <RegistrationPage />,
      },
      {
        path: "select-insurance",
        element: <SelectInsurancePage />,
      },
      // ... other pages will go here as children
      // {
      //   path: "vehicle-info",
      //   element: <VehicleInfoPage />,
      // },
    ],
  },
]);
