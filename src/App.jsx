// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Workouts from './Workouts';
// import WeightTracker from './WeightTracker';
// import Goals from './Goals';
// import Login from './Login';
// import Signup from './Signup';

// function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: '10px', borderBottom: '2px solid #c01a1aff' }}>
//         <Link to="/" style={{ marginRight: '10px' }}>Home</Link>|
//         <Link to="/workouts" style={{ marginRight: '10px' }}>Workouts</Link>|

//         <Link to="/weight" style={{ marginRight: '10px' }}>Weight Tracker</Link>|
//         <Link to="/goals">Goals</Link> |
//         <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
//       </nav>
//       <div style={{ padding: '30px' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/workouts" element={<Workouts />} />
//           <Route path="/weight" element={<WeightTracker />} />
//           <Route path="/goals" element={<Goals />} />
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Workouts from './Workouts';
// import WeightTracker from './WeightTracker';
// import Goals from './Goals';
// import Login from './Login';
// import Signup from './Signup';
// import React, { useState } from 'react';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div style={{ minHeight: "calc(100vh - 70px)" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/workouts" element={<Workouts />} />
//           <Route path="/weight" element={<WeightTracker />} />
//           <Route path="/goals" element={<Goals />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// function Navbar() {
//   // List of navigation items
//   const navItems = [
//     { label: "Home", to: "/" },
//     { label: "Workouts", to: "/workouts" },
//     { label: "Weight Tracker", to: "/weight" },
//     { label: "Goals", to: "/goals" },
//     { label: "Login", to: "/login" },
//     { label: "Sign Up", to: "/signup" }
//   ];

//   return (
//     <nav
//       style={{
//         width: "100%",
//         height: "70px",
//         background: "linear-gradient(90deg, #A770EF 0%, #F6D365 100%)",
//         boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "0 48px",
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//         fontFamily: "Montserrat, Arial, sans-serif",
//       }}
//     >
//       {/* Logo/App Name */}
//       <span
//         style={{
//           fontWeight: "bold",
//           fontSize: "1.4rem",
//           letterSpacing: "2px",
//           color: "#212121",
//           textShadow: "1px 1px 0 #fff",
//         }}
//       >
//         🏋️‍♂️ Fitness Logger
//       </span>

//       {/* Navigation links */}
//       <div style={{ display: "flex", gap: "12px" }}>
//         {navItems.map((item) => (
//           <NavLink to={item.to} label={item.label} key={item.label} />
//         ))}
//       </div>
//     </nav>
//   );
// }

// // Individual link with professional hover effect
// function NavLink({ to, label }) {
//   const baseStyle = {
//     fontSize: "1.08rem",
//     fontWeight: 600,
//     color: "#030204ff",
//     padding: "5px 50px",
//     borderRadius: "10px",
//     textDecoration: "none",
//     transition: "background 0.25s, color 0.25s",
//     boxShadow: "0 2px 7px rgba(167,112,239,0)",
//     margin: "0 2px"
//   };

//   const hoverStyle = {
//     background: "#fff",
//     color: "#212121"
//   };

//   // Local state for hover effect
//   const [hover, setHover] = React.useState(false);

//   return (
//     <Link
//       to={to}
//       style={hover ? { ...baseStyle, ...hoverStyle } : baseStyle}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       {label}
//     </Link>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import Workouts from "./Workouts";
// import WeightTracker from "./WeightTracker";
// import Goals from "./Goals";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div style={{ minHeight: "calc(100vh - 70px)" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/workouts" element={<Workouts />} />
//           <Route path="/weight" element={<WeightTracker />} />
//           <Route path="/goals" element={<Goals />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// function Navbar() {
//   const navItems = [
//     { label: "Home", to: "/" },
//     { label: "Workouts", to: "/workouts" },
//     { label: "Weight Tracker", to: "/weight" },
//     { label: "Goals", to: "/goals" },
//     { label: "Login", to: "/login" },
//     { label: "Sign Up", to: "/signup" },
//   ];

//   return (
//     <nav
//       style={{
//         width: "100%",
//         height: "70px",
//         background: "linear-gradient(90deg, #A770EF 0%, #F6D365 100%)",
//         boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "0 48px",
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//         fontFamily: "Montserrat, Arial, sans-serif",
//       }}
//     >
//       <span
//         style={{
//           fontWeight: "bold",
//           fontSize: "1.4rem",
//           letterSpacing: "2px",
//           color: "#212121",
//           textShadow: "1px 1px 0 #fff",
//         }}
//       >
//         🏋️‍♂️ Fitness Logger
//       </span>

//       <div style={{ display: "flex", gap: "32px" }}>
//         {navItems.map((item) => (
//           <NavLink key={item.to} to={item.to} label={item.label} />
//         ))}
//       </div>
//     </nav>
//   );
// }

// function NavLink({ to, label }) {
//   const baseStyle = {
//     fontSize: "1.08rem",
//     fontWeight: 600,
//     color: "#6f0df0ff",
//     padding: "8px 50px",
//     borderRadius: "10px",
//     textDecoration: "none",
//     transition: "background 0.25s, color 0.25s",
//     boxShadow: "0 2px 7px rgba(167,112,239,0)",
//     margin: "0 2px",
//   };

//   const hoverStyle = {
//     background: "#fff",
//     color: "#212121",
//   };

//   const [hover, setHover] = React.useState(false);

//   return (
//     <Link
//       to={to}
//       style={hover ? { ...baseStyle, ...hoverStyle } : baseStyle}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       {label}
//     </Link>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Workouts from "./Workouts";        // Assume you have these components
import WeightTracker from "./WeightTracker";
import Goals from "./Goals";


function App() {
  const userEmail = localStorage.getItem("userEmail");

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Workouts", to: "/workouts" },
    { label: "Weight Tracker", to: "/weight" },
    { label: "Goals", to: "/goals" },
    { label: "Login", to: "/login" },
    { label: "Sign Up", to: "/signup" },
  ];

  return (
    <BrowserRouter>
      <Navbar navItems={navItems} />
      <div style={{ minHeight: "calc(100vh - 70px)" }}>
        <Routes>
          <Route
            path="/"
            element={userEmail ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            element={userEmail ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/weight" element={<WeightTracker />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navbar({ navItems }) {
  return (
    <nav
      style={{
        width: "100%",
        height: "70px",
        background: "linear-gradient(90deg, #A770EF 0%, #F6D365 100%)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "Montserrat, Arial, sans-serif",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.4rem",
          letterSpacing: "2px",
          color: "#212121",
          textShadow: "1px 1px 0 #fff",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/")}
      >
        🏋️‍♂️ Fitness Logger
      </span>

      <div style={{ display: "flex", gap: "32px" }}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              fontSize: "1.08rem",
              fontWeight: 600,
              color: isActive ? "#212121" : "#6f0df0ff",
              padding: "8px 50px",
              borderRadius: "10px",
              textDecoration: "none",
              background: isActive ? "#fff" : "none",
              boxShadow: isActive ? "0 2px 7px rgba(167,112,239,0.5)" : "none",
              margin: "0 2px",
              transition: "background 0.25s, color 0.25s",
              cursor: "pointer",
            })}
            end
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default App;
