import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <div className="products-page">
      <h1 className="page-title">Products</h1>

      <div className="product-category-links">
        <Link to="clothes" className="category-link">
          Clothes
        </Link>

        <Link to="shoes" className="category-link">
          Shoes
        </Link>

        <Link to="electronics" className="category-link">
          Electronics
        </Link>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

      <Outlet />
    </div>
  );
};

export default Products;
