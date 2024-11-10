import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import Contact from "../components/Contact/Contact";
import AllCtg from "../pages/AllCtg";
import Fourzero from "../pages/Fourzero";
import AllItems from "../pages/AllItems";
import Carts from "../pages/Carts";
import Wishlists from "../pages/Wishlists";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <Fourzero></Fourzero>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../catagories.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("../allData.json"),
            element: <AllCtg></AllCtg>,
          },
          {
            path: "/categories/:category",
            loader: () => fetch("../allData.json"),
            element: <AllCtg></AllCtg>,
          },
        ],
      },
      {
        path: "/statistics",
        loader: () => fetch("../allData.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/All-items/:product_id",
        loader: () => fetch("../allData.json"),
        element: <AllItems></AllItems>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/:cart",
            element: <Carts></Carts>,
          },
          {
            path: "/dashboard/wish",
            element: <Wishlists></Wishlists>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default routes;
