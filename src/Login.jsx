import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (!registeredUsers.includes(form.email)) {
      alert("Email not registered. Please sign up first.");
      return;
    }
    localStorage.setItem("userEmail", form.email);
    alert("Login success");
    navigate("/home");
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ color: "#6a11cb", marginBottom: "24px" }}>Login</h2>
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
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={switchTextStyle}>
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")} style={switchButtonStyle}>
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
}

// Reuse the same styles as Signup
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  fontFamily: "'Montserrat', sans-serif",
};

const boxStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "30px",
  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
  width: "320px",
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
  background: "linear-gradient(90deg, #6a11cb, #2575fc)",
  color: "white",
  fontWeight: "700",
  fontSize: 20,
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(72,0,246,0.6)",
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
  color: "#6a11cb",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "underline",
  marginLeft: 6,
  fontSize: 14,
  padding: 0,
};

export default Login;
