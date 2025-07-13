import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { RegistrationPage } from "../components/pages/RegistrationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RegistrationPage />,
      },
      //   {
      //     path: "select-insurance",
      //     element: <SelectInsurancePage />,
      //   },
      // ... other pages will go here as children
      // {
      //   path: "vehicle-info",
      //   element: <VehicleInfoPage />,
      // },
    ],
  },
]);
