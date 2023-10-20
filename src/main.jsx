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
import Authentication from "./authentication/Authentication";
import AddTestimonial from "./pages/AddTestimonial";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4100/brands"),
      },
      {
        path: "/addProduct",
        element: <Authentication><AddProduct></AddProduct></Authentication>,
      },
      {
        path: "/myCart",
        element: <Authentication><MycartPage></MycartPage></Authentication>,
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
        element: <Authentication><AddBrands></AddBrands></Authentication>,
      },
      {
        path: "/addBanners",
        element: <Authentication><AddBanners></AddBanners></Authentication>,
      },
      {
        path: "/addTestimonials",
        element: <Authentication><AddTestimonial></AddTestimonial></Authentication>,
      },
      {
        path: "/brandsCar/:brand",
        element: <Authentication><BrandView></BrandView></Authentication>,
        loader: ({ params }) =>
          fetch(`http://localhost:4100/brandsCar/${params.brand}`),
      },
      {
        path: "/brandsCar/:brand/:car",
        element: <Authentication><SingleCarDetails></SingleCarDetails></Authentication>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:4100/brandsCar/${params.brand}/${params.car}`
          ),
      },
      {
        path: "/cars/:carId",
        element: <Authentication><UpdateProducts></UpdateProducts></Authentication>,
        loader: ({ params }) =>
          fetch(`http://localhost:4100/cars/${params.carId}`),
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
