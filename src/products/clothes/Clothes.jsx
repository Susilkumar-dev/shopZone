import React from "react";
import { Link, Outlet } from "react-router-dom";

const Clothes = () => {

  const clothes = [
    {
      id: 101,
      name: "Nike T-Shirt",
      price: 999
    },
    {
      id: 102,
      name: "Levis Jeans",
      price: 1999
    },
    {
      id: 103,
      name: "Puma Hoodie",
      price: 1499
    }
  ];

  return (
    <div className="clothes-page">

      <h2>Clothes</h2>

      <div className="clothes-grid">

        {clothes.map((item) => (

          <div
            className="cloth-card"
            key={item.id}
          >

            <Link
              to={`${item.id}/${item.name}/${item.price}`}
            >
              {item.name}
            </Link>

            <p>₹{item.price}</p>

          </div>

        ))}

      </div>

      <Outlet />

    </div>
  );
};

export default Clothes;