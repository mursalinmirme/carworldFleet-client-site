import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./authProvider/AuthProvider";
import "./index.css";
import MainLayout from "./mainLayout/MainLayout.jsx";
import AddBanners from "./pages/AddBanners";
import AddBrands from "./pages/AddBrands";
import AddProduct from "./pages/AddProduct";
import BrandView from "./pages/BrandView";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import MycartPage from "./pages/MycartPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SingleCarDetails from "./pages/SingleCarDetails";
import UpdateProducts from "./pages/UpdateProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://car-world-fleet-server-site-eehj3on19-mursalinmirme.vercel.app/brands"
          ),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MycartPage></MycartPage>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/addBrands",
        element: <AddBrands></AddBrands>,
      },
      {
        path: "/addBanners",
        element: <AddBanners></AddBanners>,
      },
      {
        path: "/brandsCar/:brand",
        element: <BrandView></BrandView>,
        loader: ({ params }) =>
          fetch(
            `https://car-world-fleet-server-site-eehj3on19-mursalinmirme.vercel.app/brandsCar/${params.brand}`
          ),
      },
      {
        path: "/brandsCar/:brand/:car",
        element: <SingleCarDetails></SingleCarDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-world-fleet-server-site-eehj3on19-mursalinmirme.vercel.app/brandsCar/${params.brand}/${params.car}`
          ),
      },
      {
        path: "/cars/:carId",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(
            `https://car-world-fleet-server-site-eehj3on19-mursalinmirme.vercel.app/cars/${params.carId}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
