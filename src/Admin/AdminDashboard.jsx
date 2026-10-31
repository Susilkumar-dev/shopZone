import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([
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
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [editId, setEditId] = useState(null);

  const [orders] = useState([
    {
      id: 1,
      customer: "Raju",
      product: "Nike T-Shirt",
      status: "Delivered"
    },
    {
      id: 2,
      customer: "Amit",
      product: "Levis Jeans",
      status: "Pending"
    },
    {
      id: 3,
      customer: "Rahul",
      product: "Puma Hoodie",
      status: "Shipped"
    }
  ]);

  const [users] = useState([
    {
      id: 1,
      name: "Raju",
      role: "user"
    },
    {
      id: 2,
      name: "Amit",
      role: "user"
    },
    {
      id: 3,
      name: "Admin",
      role: "admin"
    }
  ]);


  // ADD PRODUCT

  const addProduct = () => {

    if (!name || !price) {
      alert("Please enter product name and price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price)
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");

    alert("Product Added");
  };


  // DELETE PRODUCT

  const deleteProduct = (id) => {

    const updatedProducts = products.filter(
      product => product.id !== id
    );

    setProducts(updatedProducts);
  };


  // START UPDATE

  const startUpdate = (product) => {

    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);

  };


  // UPDATE PRODUCT

  const updateProduct = () => {

    const updatedProducts = products.map(product => {

      if (product.id === editId) {

        return {
          ...product,
          name: name,
          price: Number(price)
        };

      }

      return product;

    });

    setProducts(updatedProducts);

    setEditId(null);
    setName("");
    setPrice("");

    alert("Product Updated");
  };


  // LOGOUT

  const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");

    navigate("/admin-login");
  };


return (
  <div className="admin-page">

    <div className="admin-header">

      <h1>Admin Dashboard</h1>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </div>


    {/* PRODUCT MANAGEMENT */}

    <div className="admin-form">

      <h2>Product Management</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {editId === null ? (

        <button
          className="add-btn"
          onClick={addProduct}
        >
          Add Product
        </button>

      ) : (

        <button
          className="update-btn"
          onClick={updateProduct}
        >
          Update Product
        </button>

      )}

    </div>


    {/* PRODUCTS */}

    <h2>All Products</h2>

    <div className="admin-products">

      {products.map((product) => (

        <div
          className="admin-product-card"
          key={product.id}
        >

          <h3>{product.name}</h3>

          <p>Product ID: {product.id}</p>

          <p>Price: ₹{product.price}</p>

          <button
            className="edit-btn"
            onClick={() => startUpdate(product)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>


    {/* ORDERS */}

    <div className="orders-section">

      <h2>Orders</h2>

      <div className="orders-grid">

        {orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <p>Order ID: {order.id}</p>
            <p>Customer: {order.customer}</p>
            <p>Product: {order.product}</p>

            <span className="status">
              {order.status}
            </span>

          </div>

        ))}

      </div>

    </div>


    {/* USERS */}

    <div className="users-section">

      <h2>Users</h2>

      <div className="users-grid">

        {users.map((user) => (

          <div
            className="user-card"
            key={user.id}
          >

            <p>User ID: {user.id}</p>

            <p>Name: {user.name}</p>

            <p>Role: {user.role}</p>

          </div>

        ))}

      </div>

    </div>

  </div>
);
};

export default AdminDashboard;