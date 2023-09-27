import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import ErrorPage from "../pages/errorPage";
import Login from "../pages/authintication/login";
import Register from "../pages/authintication/register";
import UserProfile from "../pages/profilePage/user";
// import RootPage from "../pages/rootPage/rootPage";
import AccountSettings from "../components/userProfile/AccountSettings";
import ChangePassword from "../components/userProfile/ChangePassword";

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorPage: <ErrorPage />,
      children: [
        // {
        //   path: "myprofile",
        //   element: <UserProfile />,
        // },
        // {
        //   path: "courses",
        //   element: secureRouteWrapper(<CoursesPage />),
        // },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/user/accountsettings",
      element: <AccountSettings />,
    },
    {
      path: "/user/changepassword",
      element: <ChangePassword />,
    },
    {
      path: "/user",
      element: <UserProfile />,
      children: [
        {
          // path: "/accountsettings",
          // element: <AccountSettings />
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
