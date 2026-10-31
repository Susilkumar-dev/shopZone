import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    // USER LOGIN

    if (username === "Raju" && password === "1234") {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");

      alert("User Login Successful");

      navigate("/product");
    }

    // ADMIN LOGIN

    else if (username === "admin" && password === "admin123") {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      alert("Admin Login Successful");

      navigate("/admin");
    }

    // INVALID

    else {

      alert("Invalid Username or Password");

    }
  };

  return (
    <div className="login-container">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      <div className="demo-login">

        <h3>Demo Login</h3>

        <p>User: Raju / 1234</p>

        <p>Admin: admin / admin123</p>

      </div>

    </div>
  );
};

export default Login;