
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Admin trying to access user area
  if (role !== "user") {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;

