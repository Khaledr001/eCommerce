import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import ErrorPage from "../pages/errorPage";
import Login from "../pages/authintication/login";
import Register from "../pages/authintication/register";

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorPage: <ErrorPage />,
      // children: [
        // {
        //   index: true,
        //   element: <AboutPage />,
        // },
        // {
        //   path: "courses",
        //   element: secureRouteWrapper(<CoursesPage />),
        // },
      // ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);

  return <RouterProvider router={routes} />;
}
