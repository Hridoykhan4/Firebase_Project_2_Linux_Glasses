import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import GlassDetails from "../pages/GlassDetails";
import PrivateRoutes from "./PrivateRoutes";

const url = `https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses`;

const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch(url),
      },
      {
        path: "/products",
        element: (
          <PrivateRoutes>
            <Products></Products>
          </PrivateRoutes>
        ),
        loader: async () => fetch(url),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <GlassDetails></GlassDetails>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => fetch(`${url}/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default routers;
