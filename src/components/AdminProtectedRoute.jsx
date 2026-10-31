
import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // User trying to access admin area
  if (role !== "admin") {
    return <Navigate to="/product" />;
  }

  return children;
};

export default AdminProtectedRoute;

