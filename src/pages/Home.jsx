import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <h1>Welcome to ShopZone</h1>

      <h3>
        Current Path: {location.pathname}
      </h3>

      <button
        className="primary-btn"
        onClick={() => navigate("/product")}
      >
        Explore Products
      </button>

    </div>
  );
};

export default Home;