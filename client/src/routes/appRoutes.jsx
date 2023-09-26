import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import ErrorPage from "../pages/errorPage";
import Login from "../pages/authintication/login";
import Register from "../pages/authintication/register";
import UserProfile from "../pages/profilePage/user";
import RootPage from "../pages/rootPage/rootPage";

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorPage: <ErrorPage />,
      children: [
        {
          path: "myprofile",
          element: <UserProfile />,
        },
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
  ]);

  return <RouterProvider router={routes} />;
}
