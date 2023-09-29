import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import ErrorPage from "../pages/errorPage";
import Login from "../pages/authintication/login";
import Register from "../pages/authintication/register";
import UserProfile from "../pages/profilePage/user";
// import RootPage from "../pages/rootPage/rootPage";
import AccountSettings from "../components/userProfile/AccountSettings";
import ChangePassword from "../components/userProfile/ChangePassword";
import Order from "../components/userProfile/Order";
import Address from "../components/userProfile/Address";
import App from "../App";

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorPage: <ErrorPage />,
      children: [
        {
          path: "user",
          element: <UserProfile />,
          children: [
            {
              path: "accountsettings",
              element: <AccountSettings />,
            },
            {
              path: "changepassword",
              element: <ChangePassword />,
            },
            {
              path: "yourorders",
              element: <Order />,
            },
            {
              path: "address",
              element: <Address />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
