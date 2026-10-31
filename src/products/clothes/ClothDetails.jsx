import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ClothDetails = () => {

  const { id, name, price } = useParams();

  const navigate = useNavigate();

  return (
    <div className="details-card">

      <h2>Cloth Details</h2>

      <h3>Product ID: {id}</h3>

      <h3>Product Name: {name}</h3>

      <h3>Product Price: ₹{price}</h3>

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

    </div>
  );
};

export default ClothDetails;