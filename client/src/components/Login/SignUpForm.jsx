import React, { useState } from "react";


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

      // Clear form data
      setFormData({
        username: "",
        email: "",
        password: "",
      });

      const data = await response.json();
      // Handle success or error response
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <form className="Signup-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <div className="password-input-container">
        <input
          // type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      
      </div>
      <div className="password-input-container">
        <input
          // type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
     
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
