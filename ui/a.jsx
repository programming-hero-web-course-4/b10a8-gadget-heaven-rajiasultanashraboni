import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Statistics from "../Statistics";
import Dashboard from "../Dashboard";
import MainLayout from "../MainLayout/MainLayout";
import CategoryCard from "../CategoryCard.jsx/CategoryCard";
import AllData from "../AllData";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("./fakebtn.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("../fakedata.json"),
            element: <CategoryCard></CategoryCard>,
          },
          {
            path: "/category/:categoryId",
            loader: () => fetch("../fakedata.json"),
            element: <CategoryCard></CategoryCard>,
          },
        ],
      },
      
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/AllData/:categoryId",

        loader: () => fetch("../fakedata.json"),
        element: <AllData></AllData>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
