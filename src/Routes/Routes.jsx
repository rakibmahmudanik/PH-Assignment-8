import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";
import AppsPage from "../Pages/AppsPage";
import InstalledPage from "../Pages/InstalledPage";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import AppNotFundPage from "../Pages/AppNotFundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch("./appData.json"),
      },
      { path: "apps", Component: AppsPage },
      { path: "install", Component: InstalledPage },
      {
        path: "details/:id",
        Component: AppDetails,
        errorElement: <AppNotFundPage></AppNotFundPage>,
      },
    ],
  },
]);

export default router;
