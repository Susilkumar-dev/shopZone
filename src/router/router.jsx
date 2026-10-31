
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

import Products from "../products/Products";

import Clothes from "../products/clothes/Clothes";
import ClothDetails from "../products/clothes/ClothDetails";

import Shoes from "../products/shoes/Shoes";
import Electronics from "../products/electronics/Electronics";

import AdminDashboard from "../Admin/AdminDashboard";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminProtectedRoute from "../components/AdminProtectedRoute";

import Navbar from "../components/Navbar";


const router = createBrowserRouter([

  // HOME
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },


  // ABOUT
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    )
  },


  // COMMON LOGIN
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    )
  },


  // USER PRODUCT AREA
  {
    path: "/product",

    element: (
      <ProtectedRoute>
        <Navbar />
        <Products />
      </ProtectedRoute>
    ),

    children: [

      // CLOTHES
      {
        path: "clothes",

        element: <Clothes />,

        children: [

          {
            path: ":id/:name/:price",
            element: <ClothDetails />
          }

        ]
      },


      // SHOES
      {
        path: "shoes",
        element: <Shoes />
      },


      // ELECTRONICS
      {
        path: "electronics",
        element: <Electronics />
      }

    ]
  },


  // ADMIN AREA
  {
    path: "/admin",

    element: (
      <AdminProtectedRoute>
        <Navbar />
        <AdminDashboard />
      </AdminProtectedRoute>
    )
  }

]);


export default router;

