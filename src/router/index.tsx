import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { SelectInsurancePage } from "../components/pages/SelectInsurancePage";
import { InitProvider } from "../providers/InitProvider";
import { VehicleInfoPage } from "../components/pages/VehicleInfoPage";
import { SelectCompanyPage } from "../components/pages/SelectCompanyPage";
import { DiscountsPage } from "../components/pages/DiscountPage.tsx";

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
      {
        path: "vehicle-info",
        element: <VehicleInfoPage />,
      },
      {
        path: "select-company",
        element: <SelectCompanyPage />,
      },
      {
        path: "discount",
        element: <DiscountsPage />,
      },
    ],
  },
]);
