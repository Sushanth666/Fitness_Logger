import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  // Update form on input change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Submit registration form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }

    // Get users from localStorage
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if email exists
    const isAlreadyRegistered = registeredUsers.some(
      (user) => user.email === form.email
    );
    if (isAlreadyRegistered) {
      alert("Email already registered. Please log in.");
      navigate("/login");
      return;
    }

    // Register new user {email, password}
    registeredUsers.push({ email: form.email, password: form.password });
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    localStorage.setItem("userEmail", form.email);
    alert("Account created successfully!");
    navigate("/home");
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ color: "#185a9d", marginBottom: "24px" }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <label style={labelStyle}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
        <p style={switchTextStyle}>
          Already have an account?
          <button onClick={() => navigate("/login")} style={switchButtonStyle}>
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

// Styles (same as your original, tweaked for consistency)
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(120deg, #43cea2 0%, #185a9d 100%)",
  fontFamily: "'Montserrat', sans-serif",
};
const boxStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "30px",
  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
  width: "340px",
  textAlign: "center",
};
const labelStyle = {
  display: "block",
  textAlign: "left",
  marginBottom: 6,
  fontWeight: "600",
  color: "#333",
};
const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 20,
  fontSize: 16,
  borderRadius: 10,
  border: "1px solid #ddd",
  outline: "none",
  boxSizing: "border-box",
};
const buttonStyle = {
  width: "100%",
  padding: 14,
  borderRadius: 25,
  border: "none",
  background: "linear-gradient(90deg, #43cea2, #185a9d)",
  color: "white",
  fontWeight: "700",
  fontSize: 20,
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(67,206,162,0.6)",
  transition: "all 0.3s ease",
};
const switchTextStyle = {
  marginTop: 18,
  textAlign: "center",
  fontSize: 14,
  color: "#555",
};
const switchButtonStyle = {
  background: "none",
  border: "none",
  color: "#43cea2",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "underline",
  marginLeft: 6,
  fontSize: 14,
  padding: 0,
};

export default Signup;
