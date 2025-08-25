// import React, { useState } from 'react';

// function Workouts() {
//   const [workouts, setWorkouts] = useState([]);
//   const [form, setForm] = useState({
//     date: '',
//     type: '',
//     duration: '',
//     notes: '',
//   });

//   const handleChange = (e) => {
//     setForm({...form, [e.target.name]: e.target.value});
//   };

//   const addWorkout = () => {
//     if (!form.date || !form.type || !form.duration) {
//       alert('Date, workout type, and duration are required');
//       return;
//     }
//     setWorkouts([...workouts, form]);
//     setForm({ date: '', type: '', duration: '', notes: '' });
//   };

//   return (
//     <div
//     style={{
//         minHeight: "750px",
//         minWidth:"1550px",          // full viewport width
//         margin: 0,
//         overflow: 'hidden',       // prevent scrollbars 
//         backgroundImage: "url('https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=2048x2048&w=is&k=20&c=d0xsKp-TW7fgBGzkoP3XBU8s1kOtOWbCKgL6Xu0jnhM=')",
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         // backgroundPosition: 'center',
//       }}
    
//     >
//       <h2 style={{ color: 'white' }}>Log a Workout</h2>
//       <input 
//         type="date" 
//         name="date" 
//         value={form.date} 
//         onChange={handleChange} 
//         style={{ marginRight: '5px' }} 
//       />
//       <input 
//         type="text" 
//         name="type" 
//         placeholder="Workout type" 
//         value={form.type} 
//         onChange={handleChange} 
//         style={{ marginRight: '5px' }} 
//       />
//       <input 
//         type="number" 
//         name="duration" 
//         placeholder="Duration (mins)" 
//         value={form.duration} 
//         onChange={handleChange} 
//         style={{ marginRight: '5px', width: '130px' }} 
//       />
//       <input 
//         type="text" 
//         name="notes" 
//         placeholder="Notes (optional)" 
//         value={form.notes} 
//         onChange={handleChange} 
//         style={{ marginRight: '5px' }} 
//       />
//       <button onClick={addWorkout} style={{ color: 'black' }}>Add Workout</button>

//       <h3 style={{ color: 'white' }}>Workout Logs</h3>
//       <ul>
//         {workouts.length === 0 && <li style={{ color: 'white' }}>No workouts logged yet.</li>}
//         {workouts.map((w, i) => (
//           <li key={i} style={{ color: 'white' }}>
//             <b>{w.date}</b>: {w.type} for {w.duration} mins 
//             {w.notes ? ` - Notes: ${w.notes}` : ''}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Workouts;
// import React, { useState } from 'react';

// function Workouts() {
//   const [workouts, setWorkouts] = useState([]);
//   const [form, setForm] = useState({ date: '', type: '', duration: '', notes: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addWorkout = () => {
//     if (!form.date || !form.type || !form.duration) {
//       alert('Date, workout type, and duration are required');
//       return;
//     }
//     setWorkouts([...workouts, form]);
//     setForm({ date: '', type: '', duration: '', notes: '' });
//   };

//   return (
//    <div style={{
//   minHeight: "100vh",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   background: "linear-gradient(120deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"
// }}>
//       <div style={{
//         background: "rgba(255,255,255,0.92)",
//         padding: "38px",
//         borderRadius: "24px",
//         boxShadow: "0 7px 24px rgba(0,0,0,0.13)",
//         width: "350px",
//         textAlign: "center"
//       }}>
//         <h2 style={{ color: "#f26157", marginBottom: "18px", fontFamily: "Montserrat, Arial" }}>Log a Workout</h2>
//         <input type="date" name="date" value={form.date} onChange={handleChange}
//           style={{ ...inputStyle, marginBottom: "10px" }} />
//         <input type="text" name="type" placeholder="Workout type" value={form.type} onChange={handleChange}
//           style={inputStyle} />
//         <input type="number" name="duration" placeholder="Duration (mins)" value={form.duration} onChange={handleChange}
//           style={inputStyle} />
//         <input type="text" name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange}
//           style={inputStyle} /><br/>
//         <button
//           onClick={addWorkout}
//           style={buttonStyle}>
//         Add Workout
//         </button>

//         <h3 style={{ color: "#444", marginTop: "28px" }}>Workout Logs</h3>
//         <ul style={{ paddingLeft: 0 }}>
//           {workouts.length === 0 && <li style={logStyle}>No workouts logged yet.</li>}
//           {workouts.map((w, i) => (
//             <li key={i} style={logStyle}>
//               <b>{w.date}</b>: {w.type} <span style={{color:"#f26157"}}>({w.duration} mins)</span>
//               {w.notes ? ` – ${w.notes}` : ''}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginTop: "6px",
//   marginBottom: "10px",
//   border: "1px solid #eee",
//   borderRadius: "6px",
//   fontSize: "15px",
//   background: "#fff"
// };
// const buttonStyle = {
//   width: "100%",
//   padding: "12px 0",
//   border: "none",
//   borderRadius: "8px",
//   background: "linear-gradient(90deg, #f26157 0%, #fda085 100%)",
//   color: "#fff",
//   fontWeight: "bold",
//   fontSize: "16px",
//   marginTop: "8px",
//   cursor: "pointer",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
// };
// const logStyle = {
//   listStyleType: "none",
//   padding: "10px",
//   background: "#fff",
//   borderRadius: "8px",
//   margin: "8px 0",
//   color: "#444",
//   boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
// };

// export default Workouts;
// import React, { useState } from "react";

// function Workouts() {
//   const [workouts, setWorkouts] = useState([]);
//   const [form, setForm] = useState({ date: "", type: "", duration: "", notes: "" });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addOrUpdateWorkout = () => {
//     if (!form.date || !form.type || !form.duration) {
//       alert("Date, workout type, and duration are required.");
//       return;
//     }

//     if (editIndex !== null) {
//       // Update existing workout
//       const updatedWorkouts = [...workouts];
//       updatedWorkouts[editIndex] = form;
//       setWorkouts(updatedWorkouts);
//       setEditIndex(null);
//     } else {
//       // Add new workout
//       setWorkouts([...workouts, form]);
//     }
//     setForm({ date: "", type: "", duration: "", notes: "" });
//   };

//   const editWorkout = (index) => {
//     setForm(workouts[index]);
//     setEditIndex(index);
//   };

//   const deleteWorkout = (index) => {
//     if (window.confirm("Are you sure you want to delete this workout?")) {
//       setWorkouts(workouts.filter((_, i) => i !== index));
//       if (editIndex === index) {
//         setForm({ date: "", type: "", duration: "", notes: "" });
//         setEditIndex(null);
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(120deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(255,255,255,0.92)",
//           padding: 38,
//           borderRadius: 24,
//           boxShadow: "0 7px 24px rgba(0,0,0,0.13)",
//           width: 350,
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#f26157", marginBottom: 18, fontFamily: "Montserrat, Arial" }}>
//           {editIndex !== null ? "Edit Workout" : "Log a Workout"}
//         </h2>

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           style={{ ...inputStyle, marginBottom: 10 }}
//         />
//         <input
//           type="text"
//           name="type"
//           placeholder="Workout type"
//           value={form.type}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Duration (mins)"
//           value={form.duration}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           name="notes"
//           placeholder="Notes (optional)"
//           value={form.notes}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <br />
//         <button onClick={addOrUpdateWorkout} style={buttonStyle}>
//           {editIndex !== null ? "Update Workout" : "Add Workout"}
//         </button>

//         <h3 style={{ color: "#444", marginTop: 28 }}>Workout Logs</h3>
//         <ul style={{ paddingLeft: 0 }}>
//           {workouts.length === 0 && <li style={logStyle}>No workouts logged yet.</li>}
//           {workouts.map((w, i) => (
//             <li key={i} style={logStyle}>
//               <div>
//                 <b>{w.date}</b>: {w.type} <span style={{ color: "#f26157" }}>({w.duration} mins)</span>
//               </div>
//               {w.notes && <div>Notes: {w.notes}</div>}
//               <div style={{ marginTop: 10 }}>
//                 <button onClick={() => editWorkout(i)} style={actionButtonStyle}>
//                   Edit
//                 </button>
//                 <button onClick={() => deleteWorkout(i)} style={actionButtonStyle}>
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: 10,
//   borderRadius: 6,
//   border: "1px solid #eee",
//   fontSize: 15,
//   background: "#fff",
//   boxSizing: "border-box",
//   marginTop: 6,
// };

// const buttonStyle = {
//   width: "100%",
//   padding: 12,
//   borderRadius: 8,
//   border: "none",
//   background: "linear-gradient(90deg, #f26157 0%, #fda085 100%)",
//   color: "#fff",
//   fontWeight: "bold",
//   fontSize: 16,
//   marginTop: 8,
//   cursor: "pointer",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
// };

// const logStyle = {
//   listStyle: "none",
//   background: "#fff",
//   borderRadius: 8,
//   margin: "8px 0",
//   padding: 10,
//   color: "#444",
//   boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
// };

// const actionButtonStyle = {
//   padding: "6px 12px",
//   marginRight: 8,
//   border: "none",
//   borderRadius: 6,
//   cursor: "pointer",
//   fontWeight: "600",
//   color: "#fff",
//   background: "#f26157",
//   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// };

// export default Workouts;
// import React, { useState, useEffect } from "react";

// function getCurrentUserEmail() {
//   return localStorage.getItem("userEmail");
// }
// function getUserDataKey(base) {
//   const email = getCurrentUserEmail();
//   return email ? `${base}_${email}` : base;
// }
// function getUserWorkouts() {
//   const key = getUserDataKey("workouts");
//   return JSON.parse(localStorage.getItem(key)) || [];
// }
// function saveUserWorkouts(workouts) {
//   const key = getUserDataKey("workouts");
//   localStorage.setItem(key, JSON.stringify(workouts));
// }

// function Workouts() {
//   const [workouts, setWorkouts] = useState([]);
//   const [form, setForm] = useState({ date: '', type: '', duration: '', notes: '' });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     setWorkouts(getUserWorkouts());
//   }, []);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const addOrUpdateWorkout = () => {
//     if (!form.date || !form.type || !form.duration) {
//       alert('Date, workout type, and duration are required');
//       return;
//     }
//     let updated;
//     if (editIndex !== null) {
//       updated = [...workouts];
//       updated[editIndex] = form;
//       setEditIndex(null);
//     } else {
//       updated = [...workouts, form];
//     }
//     setWorkouts(updated);
//     saveUserWorkouts(updated);
//     setForm({ date: '', type: '', duration: '', notes: '' });
//   };

//   const editWorkout = (index) => {
//     setForm(workouts[index]);
//     setEditIndex(index);
//   };

//   const deleteWorkout = (index) => {
//     if (window.confirm("Are you sure you want to delete this workout?")) {
//       const updated = workouts.filter((_, i) => i !== index);
//       setWorkouts(updated);
//       saveUserWorkouts(updated);
//       if (editIndex === index) {
//         setForm({ date: '', type: '', duration: '', notes: '' });
//         setEditIndex(null);
//       }
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
//       <h2>Log a Workout</h2>
//       <input type="date" name="date" value={form.date} onChange={handleChange} />
//       <input type="text" name="type" placeholder="Workout Type" value={form.type} onChange={handleChange} />
//       <input type="number" name="duration" placeholder="Duration (mins)" value={form.duration} onChange={handleChange} />
//       <input type="text" name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange} />
//       <button onClick={addOrUpdateWorkout}>
//         {editIndex !== null ? "Update Workout" : "Add Workout"}
//       </button>
//       <h3>Workout Logs</h3>
//       {workouts.length === 0 && <p>No workouts logged yet.</p>}
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {workouts.map((w, i) => (
//           <li key={i} style={{ marginBottom: 10, border: "1px solid #ccc", padding: 10 }}>
//             <div><b>{w.date}</b> - {w.type} ({w.duration} mins)</div>
//             <div>{w.notes}</div>
//             <button onClick={() => editWorkout(i)} style={{ marginRight: 10 }}>Edit</button>
//             <button onClick={() => deleteWorkout(i)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Workouts;
import React, { useState, useEffect } from "react";

function getCurrentUserEmail() {
  return localStorage.getItem("userEmail");
}

function getUserDataKey(base) {
  const email = getCurrentUserEmail();
  return email ? `${base}_${email}` : base;
}

function getUserWorkouts() {
  return JSON.parse(localStorage.getItem(getUserDataKey("workouts"))) || [];
}

function saveUserWorkouts(workouts) {
  localStorage.setItem(getUserDataKey("workouts"), JSON.stringify(workouts));
}

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({ date: "", type: "",count:"", duration: "", notes: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setWorkouts(getUserWorkouts());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateWorkout = () => {
    if (!form.date || !form.type || !form.duration) {
      alert("Date, workout type, and duration are required.");
      return;
    }

    let updatedWorkouts;
    if (editIndex !== null) {
      updatedWorkouts = [...workouts];
      updatedWorkouts[editIndex] = form;
      setEditIndex(null);
    } else {
      updatedWorkouts = [...workouts, form];
    }
    setWorkouts(updatedWorkouts);
    saveUserWorkouts(updatedWorkouts);
    setForm({ date: "", type: "", count:"",duration: "", notes: "" });
  };

  const editWorkout = (index) => {
    setForm(workouts[index]);
    setEditIndex(index);
  };

  const deleteWorkout = (index) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      const updatedWorkouts = workouts.filter((_, i) => i !== index);
      setWorkouts(updatedWorkouts);
      saveUserWorkouts(updatedWorkouts);
      if (editIndex === index) {
        setForm({ date: "", type: "",count:"", duration: "", notes: "" });
        setEditIndex(null);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.92)",
          padding: 38,
          borderRadius: 24,
          boxShadow: "0 7px 24px rgba(0,0,0,0.13)",
          width: 350,
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#f26157", marginBottom: 18, fontFamily: "Montserrat, Arial" }}>
          {editIndex !== null ? "Edit Workout" : "Log a Workout"}
        </h2>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={{ ...inputStyle, marginBottom: 10 }}
        />
        <input
          type="text"
          name="type"
          placeholder="Workout type"
          value={form.type}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (mins)"
          value={form.duration}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="notes"
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={addOrUpdateWorkout} style={buttonStyle}>
          {editIndex !== null ? "Update Workout" : "Add Workout"}
        </button>

        <h3 style={{ color: "#444", marginTop: 28 }}>Workout Logs</h3>
        <ul style={{ paddingLeft: 0 }}>
          {workouts.length === 0 && <li style={logStyle}>No workouts logged yet.</li>}
          {workouts.map((w, i) => (
            <li key={i} style={logStyle}>
              <div>
                <b>{w.date}</b>: {w.type}{" "}
                <span style={{ color: "#f26157" }}>({w.duration} mins)</span>
              </div>
              {w.notes && <div>Notes: {w.notes}</div>}
              <div style={{ marginTop: 10 }}>
                <button onClick={() => editWorkout(i)} style={actionButtonStyle}>
                  Edit
                </button>
                <button onClick={() => deleteWorkout(i)} style={actionButtonStyle}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  borderRadius: 6,
  border: "1px solid #eee",
  fontSize: 15,
  background: "#fff",
  boxSizing: "border-box",
  marginTop: 6,
};

const buttonStyle = {
  width: "100%",
  padding: 12,
  borderRadius: 8,
  border: "none",
  background: "linear-gradient(90deg, #f26157 0%, #fda085 100%)",
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
  marginTop: 8,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const logStyle = {
  listStyle: "none",
  background: "#fff",
  borderRadius: 8,
  margin: "8px 0",
  padding: 10,
  color: "#444",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};

const actionButtonStyle = {
  padding: "6px 12px",
  marginRight: 8,
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "600",
  color: "#fff",
  background: "#f26157",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

export default Workouts;
