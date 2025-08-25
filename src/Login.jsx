// // import React, { useState } from 'react';

// // function Login() {
// //   const [form, setForm] = useState({ email: '', password: '' });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // For now, just log the form data
// //     console.log('Logging in with:', form);
// //     alert(`Logging in with email: ${form.email}`);
// //   };

// //   return (
// //     <div style={{ maxWidth: 400, margin: 'auto' }}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email:</label><br />
// //           <input 
// //             type="email" 
// //             name="email" 
// //             value={form.email} 
// //             onChange={handleChange} 
// //             required 
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label><br />
// //           <input 
// //             type="password" 
// //             name="password" 
// //             value={form.password} 
// //             onChange={handleChange} 
// //             required 
// //             minLength={6}
// //           />
// //         </div>
// //         <button type="submit" style={{ marginTop: 10 }}>Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;
// // import React, { useState } from 'react';

// // function Login() {
// //   const [form, setForm] = useState({ email: '', password: '' });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Logging in with email: ${form.email}`);
// //   };

// //   return (
// //     <div style={{
// //       minHeight: "100vh",
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
// //     }}>
// //       <div style={{
// //         background: "#fff",
// //         padding: "32px",
// //         borderRadius: "18px",
// //         boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
// //         width: "320px"
// //       }}>
// //         <h2 style={{textAlign: "center", marginBottom: 20, color: "#f26157", fontFamily: "Montserrat, sans-serif"}}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div style={{marginBottom: "20px"}}>
// //             <label style={{color: "#333", fontWeight: "bold"}}>Email</label>
// //             <input 
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               required
// //               style={{
// //                 width: "100%",
// //                 padding: "10px",
// //                 marginTop: "5px",
// //                 border: "1px solid #eee",
// //                 borderRadius: "6px",
// //                 fontSize: "16px",
// //                 boxSizing: "border-box"
// //               }}
// //             />
// //           </div>
// //           <div style={{marginBottom: "20px"}}>
// //             <label style={{color: "#333", fontWeight: "bold"}}>Password</label>
// //             <input 
// //               type="password"
// //               name="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               required
// //               style={{
// //                 width: "100%",
// //                 padding: "10px",
// //                 marginTop: "5px",
// //                 border: "1px solid #eee",
// //                 borderRadius: "6px",
// //                 fontSize: "16px",
// //                 boxSizing: "border-box"
// //               }}
// //             />
// //           </div>
// //           <button 
// //             type="submit" 
// //             style={{
// //               width: "100%",
// //               padding: "12px 0",
// //               border: "none",
// //               borderRadius: "6px",
// //               background: "linear-gradient(90deg, #f26157 0%, #f6d365 100%)",
// //               color: "#fff",
// //               fontWeight: "bold",
// //               fontSize: "18px",
// //               cursor: "pointer",
// //               boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
// //             }}
// //           >Login</button>
// //         </form>
// //         <div style={{textAlign:"center", marginTop:20}}>
// //           <span style={{color:"#888"}}>Don't have an account?</span>
// //           <br/>
// //           <a href="/signup" style={{color:"#f26157", textDecoration:"underline"}}>Sign Up Here</a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;
// // import React, { useState } from 'react';

// // function Login() {
// //   const [form, setForm] = useState({ email: '', password: '' });

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     alert(`Logging in with email: ${form.email}`);
// //   };

// //   return (
// //     <div style={{
// //       minHeight: "100vh",
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       background: "linear-gradient(135deg, #A770EF 0%, #F6D365 100%)"
// //     }}>
// //       <div style={{
// //         background: "rgba(255,255,255,0.95)",
// //         padding: "38px",
// //         borderRadius: "20px",
// //         boxShadow: "0 4px 24px rgba(0,0,0,0.14)",
// //         width: "320px"
// //       }}>
// //         <h2 style={{textAlign: "center", marginBottom: 20, color: "#A770EF"}}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div style={{marginBottom: "20px"}}>
// //             <label>Email</label>
// //             <input type="email" name="email" value={form.email} onChange={handleChange} required
// //               style={inputStyle} />
// //           </div>
// //           <div style={{marginBottom: "20px"}}>
// //             <label>Password</label>
// //             <input type="password" name="password" value={form.password} onChange={handleChange} required
// //               style={inputStyle} />
// //           </div>
// //           <button type="submit" style={buttonStyle("#A770EF", "#F6D365")}>Login</button>
// //         </form>
        
// //       </div>
// //     </div>
// //   );
// // }

// // const inputStyle = {
// //   width: "100%",
// //   padding: "10px",
// //   marginTop: "5px",
// //   border: "1px solid #eee",
// //   borderRadius: "6px",
// //   fontSize: "16px",
// //   boxSizing: "border-box"
// // };
// // const buttonStyle = (color1, color2) => ({
// //   width: "100%",
// //   padding: "12px 0",
// //   border: "none",
// //   borderRadius: "6px",
// //   background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`,
// //   color: "#fff",
// //   fontWeight: "bold",
// //   fontSize: "18px",
// //   cursor: "pointer",
// //   boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
// // });
// // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Login() {
// //   const [form, setForm] = useState({ email: '', password: '' });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Your login logic here
// //     alert(`Logging in with: ${form.email}`);
// //   };

// //   const goToSignup = () => {
// //     navigate('/signup');
// //   };

// //   return (
// //     <div style={{ maxWidth: 400, margin: 'auto' }}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email:</label><br />
// //           <input 
// //             type="email" 
// //             name="email" 
// //             value={form.email} 
// //             onChange={handleChange} 
// //             required 
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label><br />
// //           <input 
// //             type="password" 
// //             name="password" 
// //             value={form.password} 
// //             onChange={handleChange} 
// //             required 
// //             minLength={6}
// //           />
// //         </div>
// //         <button type="submit" style={{ marginTop: 10 }}>Login</button>
// //       </form>

// //       <div style={{ marginTop: 20 }}>
// //         <span>Don't have an account? </span>
// //         <button 
// //           onClick={goToSignup} 
// //           style={{ 
// //             background: 'none', 
// //             border: 'none', 
// //             color: '#007BFF', 
// //             cursor: 'pointer',
// //             textDecoration: 'underline',
// //             padding: 0,
// //             fontSize: '1em'
// //           }}
// //         >
// //           Sign up here
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Login() {
// //   const [form, setForm] = useState({ email: '', password: '' });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Logging in with email: ${form.email}`);
// //   };

// //   const goToSignup = () => {
// //     navigate('/signup');
// //   };

// //   return (
// //     <div style={styles.pageContainer}>
// //       <div style={styles.card}>
// //         <h2 style={styles.title}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label style={styles.label}>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             required
// //             style={styles.input}
// //             onFocus={(e) => (e.target.style.boxShadow = '0 0 8px 2px #6a11cb')}
// //             onBlur={(e) => (e.target.style.boxShadow = 'none')}
// //           />

// //           <label style={styles.label}>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={form.password}
// //             onChange={handleChange}
// //             required
// //             minLength={6}
// //             style={styles.input}
// //             onFocus={(e) => (e.target.style.boxShadow = '0 0 8px 2px #6a11cb')}
// //             onBlur={(e) => (e.target.style.boxShadow = 'none')}
// //           />

// //           <button
// //             type="submit"
// //             style={styles.button}
// //             onMouseEnter={(e) => {
// //               e.target.style.background = 'linear-gradient(90deg, #8e2de2, #4a00e0)';
// //               e.target.style.boxShadow = '0 8px 15px rgba(72,0,246,0.6)';
// //               e.target.style.transform = 'scale(1.05)';
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.background = 'linear-gradient(90deg, #6a11cb, #2575fc)';
// //               e.target.style.boxShadow = '0 4px 8px rgba(72,0,246,0.3)';
// //               e.target.style.transform = 'scale(1)';
// //             }}
// //           >
// //             Login
// //           </button>
// //         </form>

// //         <p style={styles.switchText}>
// //           Don't have an account?{' '}
// //           <button onClick={goToSignup} style={styles.switchButton}>
// //             Sign up here
// //           </button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   pageContainer: {
// //     minHeight: '100vh',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
// //     fontFamily: "'Montserrat', sans-serif",
// //   },
// //   card: {
// //     backgroundColor: 'white',
// //     padding: '40px',
// //     borderRadius: '24px',
// //     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
// //     width: '320px',
// //     textAlign: 'center',
// //   },
// //   title: {
// //     marginBottom: '24px',
// //     color: '#4a00e0',
// //     fontWeight: '700',
// //     fontSize: '1.8rem',
// //   },
// //   label: {
// //     display: 'block',
// //     textAlign: 'left',
// //     marginBottom: '6px',
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   input: {
// //     width: '100%',
// //     padding: '12px 10px',
// //     marginBottom: '20px',
// //     fontSize: '1rem',
// //     borderRadius: '8px',
// //     border: '1px solid #ddd',
// //     outline: 'none',
// //     transition: 'box-shadow 0.3s ease',
// //     boxSizing: 'border-box',
// //   },
// //   button: {
// //     width: '100%',
// //     padding: '14px 0',
// //     border: 'none',
// //     borderRadius: '12px',
// //     background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
// //     color: 'white',
// //     fontWeight: '700',
// //     fontSize: '1.1rem',
// //     cursor: 'pointer',
// //     boxShadow: '0 4px 8px rgba(72,0,246,0.3)',
// //     transition: 'all 0.3s ease',
// //   },
// //   switchText: {
// //     marginTop: '18px',
// //     color: '#555',
// //     fontSize: '0.9rem',
// //   },
// //   switchButton: {
// //     background: 'none',
// //     border: 'none',
// //     color: '#4a00e0',
// //     fontWeight: '600',
// //     cursor: 'pointer',
// //     textDecoration: 'underline',
// //     padding: 0,
// //     marginLeft: '6px',
// //     fontSize: '0.9rem',
// //   },
// // };

// // export default Login;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (form.email && form.password) {
// //       localStorage.setItem("userEmail", form.email);
// //       navigate("/home");
// //     } else {
// //       alert("Please fill in all fields");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
// //         fontFamily: "'Montserrat', sans-serif",
// //       }}
// //     >
// //       <div
// //         style={{
// //           backgroundColor: "white",
// //           padding: "40px",
// //           borderRadius: "24px",
// //           boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
// //           width: "320px",
// //           textAlign: "center",
// //         }}
// //       >
// //         <h2 style={{ color: "#6a11cb", marginBottom: "24px" }}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label style={labelStyle}>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             required
// //             style={inputStyle}
// //             onFocus={(e) => (e.target.style.boxShadow = "0 0 8px 2px #6a11cb")}
// //             onBlur={(e) => (e.target.style.boxShadow = "none")}
// //           />
// //           <label style={labelStyle}>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={form.password}
// //             onChange={handleChange}
// //             required
// //             style={inputStyle}
// //             onFocus={(e) => (e.target.style.boxShadow = "0 0 8px 2px #6a11cb")}
// //             onBlur={(e) => (e.target.style.boxShadow = "none")}
// //           />
// //           <button type="submit" style={buttonStyle}>
// //             Login
// //           </button>
// //         </form>
// //         <p style={switchTextStyle}>
// //           Don't have an account?{" "}
// //           <button
// //             onClick={() => navigate("/signup")}
// //             style={switchButtonStyle}
// //           >
// //             Sign up here
// //           </button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // const labelStyle = {
// //   display: "block",
// //   textAlign: "left",
// //   marginBottom: "6px",
// //   fontWeight: "600",
// //   color: "#333",
// // };
// // const inputStyle = {
// //   width: "100%",
// //   padding: "12px 10px",
// //   marginBottom: "20px",
// //   fontSize: "1rem",
// //   borderRadius: "8px",
// //   border: "1px solid #ddd",
// //   outline: "none",
// //   boxSizing: "border-box",
// //   transition: "box-shadow 0.3s ease",
// // };
// // const buttonStyle = {
// //   width: "100%",
// //   padding: "14px",
// //   borderRadius: "12px",
// //   border: "none",
// //   background: "linear-gradient(90deg, #6a11cb, #2575fc)",
// //   color: "white",
// //   fontWeight: "700",
// //   fontSize: "1.1rem",
// //   cursor: "pointer",
// //   boxShadow: "0 4px 8px rgba(72,0,246,0.3)",
// //   transition: "all 0.3s ease",
// // };
// // const switchTextStyle = {
// //   marginTop: "18px",
// //   color: "#444",
// //   fontSize: "0.9rem",
// // };
// // const switchButtonStyle = {
// //   background: "none",
// //   border: "none",
// //   color: "#6a11cb",
// //   fontWeight: "600",
// //   cursor: "pointer",
// //   textDecoration: "underline",
// //   padding: 0,
// //   marginLeft: "6px",
// //   fontSize: "0.9rem",
// // };

// // export default Login;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (form.email && form.password) {
// //       localStorage.setItem("userEmail", form.email);
// //       alert("Login success");
// //       navigate("/home");
// //     } else {
// //       alert("Please fill in all fields");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
// //         fontFamily: "'Montserrat', sans-serif",
// //       }}
// //     >
// //       <div
// //         style={{
// //           backgroundColor: "white",
// //           padding: "40px",
// //           borderRadius: "30px",
// //           boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
// //           width: "320px",
// //           textAlign: "center",
// //         }}
// //       >
// //         <h2 style={{ color: "#6a11cb", marginBottom: "24px" }}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label style={labelStyle}>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             required
// //             style={inputStyle}
// //             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #6a11cb")}
// //             onBlur={(e) => (e.target.style.boxShadow = "none")}
// //           />
// //           <label style={labelStyle}>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={form.password}
// //             onChange={handleChange}
// //             required
// //             style={inputStyle}
// //             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #6a11cb")}
// //             onBlur={(e) => (e.target.style.boxShadow = "none")}
// //           />
// //           <button type="submit" style={buttonStyle}>
// //             Login
// //           </button>
// //         </form>
// //         <p style={switchTextStyle}>
// //           Don't have an account?{" "}
// //           <button
// //             onClick={() => navigate("/signup")}
// //             style={switchButtonStyle}
// //           >
// //             Sign up here
// //           </button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // const labelStyle = {
// //   display: "block",
// //   textAlign: "left",
// //   marginBottom: "6px",
// //   fontWeight: "600",
// //   color: "#333",
// // };
// // const inputStyle = {
// //   width: "100%",
// //   padding: "12px",
// //   marginBottom: "20px",
// //   fontSize: "1rem",
// //   borderRadius: "10px",
// //   border: "1px solid #ddd",
// //   outline: "none",
// //   boxSizing: "border-box",
// //   transition: "box-shadow 0.3s ease",
// // };
// // const buttonStyle = {
// //   width: "100%",
// //   padding: "14px",
// //   borderRadius: "25px",
// //   border: "none",
// //   background: "linear-gradient(90deg, #6a11cb, #2575fc)",
// //   color: "white",
// //   fontWeight: "700",
// //   fontSize: "1.2rem",
// //   cursor: "pointer",
// //   boxShadow: "0 6px 18px rgba(72,0,246,0.6)",
// //   transition: "all 0.3s ease",
// // };
// // const switchTextStyle = {
// //   marginTop: "18px",
// //   textAlign: "center",
// //   fontSize: "0.9rem",
// //   color: "#555",
// // };
// // const switchButtonStyle = {
// //   background: "none",
// //   border: "none",
// //   color: "#6a11cb",
// //   fontWeight: "600",
// //   cursor: "pointer",
// //   textDecoration: "underline",
// //   padding: 0,
// //   marginLeft: "6px",
// //   fontSize: "0.9rem",
// // };

// // export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.email && form.password) {
//       // Save email to localStorage
//       localStorage.setItem("userEmail", form.email);
//       alert("Login success");
//       navigate("/home"); // Navigate to home after login
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
//         background: "linear-gradient(135deg, #6a11cb 0%, #257fc2 100%)",
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "40px",
//           borderRadius: "30px",
//           boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
//           width: "320px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#6a11cb", marginBottom: "24px" }}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={labelStyle}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #6a11cb")}
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
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #6a11cb")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <button type="submit" style={buttonStyle}>
//             Login
//           </button>
//         </form>
//         <p style={switchTextStyle}>
//           Don't have an account?
//           <button onClick={() => navigate("/signup")} style={switchButtonStyle}>
//             Sign up here
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
//   borderRadius: 25,
//   border: "none",
//   background: "linear-gradient(90deg, #6a11cb 0%, #257fc2 100%)",
//   color: "white",
//   fontWeight: "700",
//   fontSize: 20,
//   cursor: "pointer",
//   boxShadow: "0 8px 20px rgba(106,17,203,0.6)",
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
//   color: "#6a11cb",
//   fontWeight: "600",
//   cursor: "pointer",
//   textDecoration: "underline",
//   marginLeft: 6,
//   fontSize: 14,
//   padding: 0,
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Retrieve registered users
//     const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

//     // Check if email is registered
//     if (!registeredUsers.includes(form.email)) {
//       alert("Email not registered. Please sign up first.");
//       return;
//     }

//     // Allow login
//     localStorage.setItem("userEmail", form.email);
//     alert("Login success");
//     navigate("/home");
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "40px",
//           borderRadius: "30px",
//           boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
//           width: "320px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#6a11cb", marginBottom: "24px" }}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={labelStyle}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #6a11cb")}
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
//             onFocus={(e) => (e.target.style.boxShadow = "0 0 10px 2px #6a11cb")}
//             onBlur={(e) => (e.target.style.boxShadow = "none")}
//           />
//           <button type="submit" style={buttonStyle}>
//             Login
//           </button>
//         </form>
//         <p style={switchTextStyle}>
//           Don't have an account?
//           <button
//             onClick={() => navigate("/signup")}
//             style={switchButtonStyle}
//           >
//             Sign up here
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
//   borderRadius: 25,
//   border: "none",
//   background: "linear-gradient(90deg, #6a11cb, #2575fc)",
//   color: "white",
//   fontWeight: "700",
//   fontSize: 20,
//   cursor: "pointer",
//   boxShadow: "0 8px 20px rgba(72,0,246,0.6)",
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
//   color: "#6a11cb",
//   fontWeight: "600",
//   cursor: "pointer",
//   textDecoration: "underline",
//   marginLeft: 6,
//   fontSize: 14,
//   padding: 0,
// };

// export default Login;
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
