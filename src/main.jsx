import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import AddProduct from './pages/AddProduct'
import MycartPage from './pages/MycartPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import AddBrands from './pages/AddBrands'
import AuthProvider from './authProvider/AuthProvider'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MycartPage></MycartPage>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/addBrands',
        element: <AddBrands></AddBrands>,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
