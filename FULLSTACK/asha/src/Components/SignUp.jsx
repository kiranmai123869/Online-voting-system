import React, { useState } from "react";
import "../CSS/SignUp.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      username: formData.email,
      password: formData.password,
      role: formData.role,
    };

    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert("Error registering user");
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-heading">Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" id="name" className="form-input" value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" className="form-input" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-input" value={formData.password} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-input" value={formData.confirmPassword} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <select id="role" className="form-input" value={formData.role} onChange={handleChange}>
              <option value="">-- Select Role --</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/l" className="signup-link">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;