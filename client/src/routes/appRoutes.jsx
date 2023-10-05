import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import Login from "../pages/authintication/login";
import Register from "../pages/authintication/register";
import UserProfile from "../pages/profilePage/user";
import AccountSettings from "../components/userProfile/AccountSettings";
import ChangePassword from "../components/userProfile/ChangePassword";
import Order from "../components/userProfile/Order";
import Address from "../components/userProfile/Address";
import App from "../App";
import Admin from "../admin/admin";
import AllProducts from "../admin/pages/products/allProducts";
import AddProduct from "../admin/pages/products/addProduct";

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
    {
      path: "/admin",
      element: <Admin />,
      errorPage: <ErrorPage />,
      children: [
        {
          path: "all-products",
          element: <AllProducts />,
        },{
          path: "add-product",
          element: <AddProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
