// import React, { useState } from 'react';

// function Signup() {
//   const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     // For now, just log the form data
//     console.log('Signing up with:', form);
//     alert(`Signing up with email: ${form.email}`);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto' }}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label><br />
//           <input 
//             type="email" 
//             name="email" 
//             value={form.email} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Password:</label><br />
//           <input 
//             type="password" 
//             name="password" 
//             value={form.password} 
//             onChange={handleChange} 
//             required 
//             minLength={6}
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label><br />
//           <input 
//             type="password" 
//             name="confirmPassword" 
//             value={form.confirmPassword} 
//             onChange={handleChange} 
//             required 
//             minLength={6}
//           />
//         </div>
//         <button type="submit" style={{ marginTop: 10 }}>Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
// import React, { useState } from 'react';

// function Signup() {
//   const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     alert(`Signing up with email: ${form.email}`);
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundImage: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"
//     }}>
//       <div style={{
//         background: "#fff",
//         padding: "32px",
//         borderRadius: "18px",
//         boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
//         width: "320px"
//       }}>
//         <h2 style={{textAlign: "center", marginBottom: 20, color: "#66a6ff", fontFamily: "Montserrat, sans-serif"}}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={{marginBottom: "20px"}}>
//             <label style={{color: "#333", fontWeight: "bold"}}>Email</label>
//             <input 
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "5px",
//                 border: "1px solid #eee",
//                 borderRadius: "6px",
//                 fontSize: "16px"
//               }}
//             />
//           </div>
//           <div style={{marginBottom: "20px"}}>
//             <label style={{color: "#333", fontWeight: "bold"}}>Password</label>
//             <input 
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "5px",
//                 border: "1px solid #eee",
//                 borderRadius: "6px",
//                 fontSize: "16px"
//               }}
//             />
//           </div>
//           <div style={{marginBottom: "20px"}}>
//             <label style={{color: "#333", fontWeight: "bold"}}>Confirm Password</label>
//             <input 
//               type="password"
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "5px",
//                 border: "1px solid #eee",
//                 borderRadius: "6px",
//                 fontSize: "16px"
//               }}
//             />
//           </div>
//           <button 
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px 0",
//               border: "none",
//               borderRadius: "6px",
//               background: "linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%)",
//               color: "#fff",
//               fontWeight: "bold",
//               fontSize: "18px",
//               cursor: "pointer",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
//             }}
//           >Sign Up</button>
//         </form>
//         <div style={{textAlign:"center", marginTop:20}}>
//           <span style={{color:"#888"}}>Already have an account?</span>
//           <br/>
//           <a href="/login" style={{color:"#66a6ff", textDecoration:"underline"}}>Login Here</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
// import React, { useState } from 'react';
// function Signup() {
//   const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     alert(`Signing up with email: ${form.email}`);
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "linear-gradient(120deg, #43E97B 0%, #38F9D7 100%)"
//     }}>
//       <div style={{
//         background: "rgba(255,255,255,0.94)",
//         padding: "38px",
//         borderRadius: "20px",
//         boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
//         width: "320px"
//       }}>
//         <h2 style={{textAlign: "center", marginBottom: 20, color: "#43E97B"}}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={{marginBottom: "20px"}}>
//             <label>Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required
//               style={inputStyle} />
//           </div>
//           <div style={{marginBottom: "20px"}}>
//             <label>Password</label>
//             <input type="password" name="password" value={form.password} onChange={handleChange} required
//               style={inputStyle} />
//           </div>
//           <div style={{marginBottom: "20px"}}>
//             <label>Confirm Password</label>
//             <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required
//               style={inputStyle} />
//           </div>
//           <button type="submit" style={buttonStyle("#43E97B", "#38F9D7")}>Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginTop: "5px",
//   border: "1px solid #eee",
//   borderRadius: "6px",
//   fontSize: "16px",
//   boxSizing: "border-box"
// };
// const buttonStyle = (color1, color2) => ({
//   width: "100%",
//   padding: "12px 0",
//   border: "none",
//   borderRadius: "6px",
//   background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`,
//   color: "#fff",
//   fontWeight: "bold",
//   fontSize: "18px",
//   cursor: "pointer",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
// });
// export default Signup;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(form.password !== form.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     alert(`Signing up with email: ${form.email}`);
//   };

//   const goToLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={styles.label}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//             onFocus={(e) => (e.target.style.boxShadow = '0 0 8px 2px #43cea2')}
//             onBlur={(e) => (e.target.style.boxShadow = 'none')}
//           />

//           <label style={styles.label}>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             minLength={6}
//             style={styles.input}
//             onFocus={(e) => (e.target.style.boxShadow = '0 0 8px 2px #43cea2')}
//             onBlur={(e) => (e.target.style.boxShadow = 'none')}
//           />

//           <label style={styles.label}>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//             minLength={6}
//             style={styles.input}
//             onFocus={(e) => (e.target.style.boxShadow = '0 0 8px 2px #43cea2')}
//             onBlur={(e) => (e.target.style.boxShadow = 'none')}
//           />

//           <button
//             type="submit"
//             style={styles.button}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'linear-gradient(90deg, #11998e, #38ef7d)';
//               e.target.style.boxShadow = '0 8px 15px rgba(56,239,125,0.7)';
//               e.target.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'linear-gradient(90deg, #43cea2, #185a9d)';
//               e.target.style.boxShadow = '0 4px 8px rgba(56,239,125, 0.4)';
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             Sign Up
//           </button>
//         </form>

//         <p style={styles.switchText}>
//           Already have an account?{' '}
//           <button onClick={goToLogin} style={styles.switchButton}>
//             Login here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
//     fontFamily: "'Montserrat', sans-serif",
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: '40px',
//     borderRadius: '24px',
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.14)',
//     width: '340px',
//     textAlign: 'center',
//   },
//   title: {
//     marginBottom: '24px',
//     color: '#185a9d',
//     fontWeight: '700',
//     fontSize: '1.8rem',
//   },
//   label: {
//     display: 'block',
//     textAlign: 'left',
//     marginBottom: '6px',
//     fontWeight: '600',
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: '12px 10px',
//     marginBottom: '20px',
//     fontSize: '1rem',
//     borderRadius: '8px',
//     border: '1px solid #ddd',
//     outline: 'none',
//     boxSizing: 'border-box',
//     transition: 'box-shadow 0.3s ease',
//   },
//   button: {
//     width: '100%',
//     padding: '14px 0',
//     border: 'none',
//     borderRadius: '12px',
//     background: 'linear-gradient(90deg, #43cea2, #185a9d)',
//     color: 'white',
//     fontWeight: '700',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     boxShadow: '0 4px 8px rgba(56,239,125, 0.4)',
//     transition: 'all 0.3s ease',
//   },
//   switchText: {
//     marginTop: '18px',
//     color: '#1ad914ff',
//     fontSize: '0.9rem',
//   },
//   switchButton: {
//     background: 'none',
//     border: 'none',
//     color: '#08bfe4ff',
//     fontWeight: '600',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     padding: 0,
//     marginLeft: '6px',
//     fontSize: '0.9rem',
//   },
// };

// export default Signup;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     if (form.email && form.password) {
//       localStorage.setItem("userEmail", form.email);
//       navigate("/home");
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(120deg, #43cea2 0%, #185a9d 100%)",
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "40px",
//           borderRadius: "24px",
//           boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
//           width: "340px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#185a9d", marginBottom: "24px" }}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={labelStyle}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 8px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <label style={labelStyle}>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 8px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <label style={labelStyle}>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 8px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <button type="submit" style={buttonStyle}>
//             Sign Up
//           </button>
//         </form>
//         <p style={switchTextStyle}>
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             style={switchButtonStyle}
//           >
//             Login here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// const labelStyle = {
//   display: "block",
//   textAlign: "left",
//   marginBottom: "6px",
//   fontWeight: "600",
//   color: "#333",
// };
// const inputStyle = {
//   width: "100%",
//   padding: "12px 10px",
//   marginBottom: "20px",
//   fontSize: "1rem",
//   borderRadius: "8px",
//   border: "1px solid #ddd",
//   outline: "none",
//   boxSizing: "border-box",
//   transition: "box-shadow 0.3s ease",
// };
// const buttonStyle = {
//   width: "100%",
//   padding: "14px",
//   borderRadius: "12px",
//   border: "none",
//   background: "linear-gradient(90deg, #43cea2, #185a9d)",
//   color: "white",
//   fontWeight: "700",
//   fontSize: "1.1rem",
//   cursor: "pointer",
//   boxShadow: "0 4px 8px rgba(56,239,125,0.3)",
//   transition: "all 0.3s ease",
// };
// const switchTextStyle = {
//   marginTop: "18px",
//   color: "#444",
//   fontSize: "0.9rem",
// };
// const switchButtonStyle = {
//   background: "none",
//   border: "none",
//   color: "#43cea2",
//   fontWeight: "600",
//   cursor: "pointer",
//   textDecoration: "underline",
//   padding: 0,
//   marginLeft: "6px",
//   fontSize: "0.9rem",
// };

// export default Signup;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     if (form.email && form.password) {
//       localStorage.setItem("userEmail", form.email);
//       alert("Account created successfully!");
//       navigate("/home");
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(120deg, #43cea2 0%, #185a9d 100%)",
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "40px",
//           borderRadius: "30px",
//           boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
//           width: "340px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#185a9d", marginBottom: "24px" }}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={labelStyle}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <label style={labelStyle}>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <label style={labelStyle}>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <button type="submit" style={buttonStyle}>
//             Sign Up
//           </button>
//         </form>
//         <p style={switchTextStyle}>
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             style={switchButtonStyle}
//           >
//             Login here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// const labelStyle = {
//   display: "block",
//   textAlign: "left",
//   marginBottom: "6px",
//   fontWeight: "600",
//   color: "#333",
// };
// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "20px",
//   fontSize: "1rem",
//   borderRadius: "10px",
//   border: "1px solid #ddd",
//   outline: "none",
//   boxSizing: "border-box",
//   transition: "box-shadow 0.3s ease",
// };
// const buttonStyle = {
//   width: "100%",
//   padding: "14px",
//   borderRadius: "25px",
//   border: "none",
//   background: "linear-gradient(90deg, #43cea2, #185a9d)",
//   color: "white",
//   fontWeight: "700",
//   fontSize: "1.2rem",
//   cursor: "pointer",
//   boxShadow: "0 6px 18px rgba(56, 206, 162, 0.6)",
//   transition: "all 0.3s ease",
// };
// const switchTextStyle = {
//   marginTop: "18px",
//   textAlign: "center",
//   fontSize: "0.9rem",
//   color: "#555",
// };
// const switchButtonStyle = {
//   background: "none",
//   border: "none",
//   color: "#43cea2",
//   fontWeight: "600",
//   cursor: "pointer",
//   textDecoration: "underline",
//   padding: 0,
//   marginLeft: "6px",
//   fontSize: "0.9rem",
// };

// export default Signup;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     if (!form.email || !form.password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Save registered emails list or create new
//     const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

//     if (registeredUsers.includes(form.email)) {
//       alert("Email already registered. Please login.");
//       navigate("/login");
//       return;
//     }

//     registeredUsers.push(form.email);
//     localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

//     // Save current logged in user
//     localStorage.setItem("userEmail", form.email);
//     alert("Account created successfully!");
//     navigate("/home");
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(120deg, #43cea2, #185a9d)",
//         fontFamily: "'Montserrat', Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: 40,
//           borderRadius: 30,
//           boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
//           width: 340,
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#185a9d", marginBottom: 24 }}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={labelStyle}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <label style={labelStyle}>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//             minLength={6}
//           />
//           <label style={labelStyle}>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #43cea2")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//             minLength={6}
//           />
//           <button type="submit" style={buttonStyle}>
//             Sign Up
//           </button>
//         </form>
//         <p style={switchTextStyle}>
//           Already have an account?
//           <button onClick={() => navigate("/login")} style={switchButtonStyle}>
//             Login here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// const labelStyle = {
//   display: "block",
//   textAlign: "left",
//   marginBottom: 6,
//   fontWeight: "600",
//   color: "#333",
// };

// const inputStyle = {
//   width: "100%",
//   padding: 12,
//   marginBottom: 20,
//   fontSize: 16,
//   borderRadius: 10,
//   border: "1px solid #ddd",
//   outline: "none",
//   boxSizing: "border-box",
//   transition: "box-shadow 0.3s ease",
// };

// const buttonStyle = {
//   width: "100%",
//   padding: 14,
//   borderRadius: 30,
//   border: "none",
//   background: "linear-gradient(90deg, #43cea2, #185a9d)",
//   color: "white",
//   fontWeight: "bold",
//   fontSize: 20,
//   cursor: "pointer",
//   boxShadow: "0 8px 20px rgba(67,206,162,0.8)",
//   transition: "all 0.3s ease",
// };

// const switchTextStyle = {
//   marginTop: 18,
//   textAlign: "center",
//   fontSize: 14,
//   color: "#555",
// };

// const switchButtonStyle = {
//   background: "none",
//   border: "none",
//   color: "#43cea2",
//   fontWeight: "600",
//   cursor: "pointer",
//   textDecoration: "underline",
//   marginLeft: 6,
//   fontSize: 14,
//   padding: 0,
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (registeredUsers.includes(form.email)) {
      alert("Email already registered. Please log in.");
      navigate("/login");
      return;
    }

    registeredUsers.push(form.email);
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
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} style={switchButtonStyle}>
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

// Reusable styles
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
