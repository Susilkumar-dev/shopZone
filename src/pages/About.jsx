import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <div className="about-page">

      <h1>Welcome to ShopZone</h1>

      <p>
        ShopZone is an e-commerce application built
        using React and React Router.
      </p>

      <br />

      <Link to="/product">
        Go to Products
      </Link>

    </div>
  );
};

export default About;