import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Clear form data
      setFormData({
        username: "",
        email: "",
        password: "",
      });

      const data = await response.json();

      // Update session to indicate that the user is logged in
      const sessionResponse = await fetch("http://localhost:3001/api/session", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isLoggedIn: true }),
      });

      if (!sessionResponse.ok) {
        throw new Error("Failed to update session");
      }

      console.log("Session updated", sessionResponse);
      // Handle success response
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"  
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
