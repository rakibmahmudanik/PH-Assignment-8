import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";
import AppsPage from "../Pages/AppsPage";
import InstalledPage from "../Pages/InstalledPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: HomePage },
      { path: "apps", Component: AppsPage },
      { path: "install", Component: InstalledPage },
    ],
  },
]);

export default router;
