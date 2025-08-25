// function Home() {
//   return (
//     <div
//        style={{
//         minHeight: "750px",
//         minWidth:"1550px",          // full viewport width
//         margin: 0,
//         overflow: 'hidden',       // prevent scrollbars 
//         backgroundImage: "url('https://img.freepik.com/free-photo/top-view-perfectly-ordered-fitness-items_23-2150321809.jpg')",
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         // backgroundPosition: 'center',
//       }}
    
    
//     >
//       <h1 style={{ color: 'white' }} >Welcome to Fitness Journey Logger</h1>
//       <p style={{ color: 'white' }}>Track your workouts, weight, and fitness goals, all in one easy-to-use app.</p>
      

//     </div>
//   );
// }

// export default Home;
// function Home() {
//   return (
//     <div style={{
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
//     }}>
//       <div style={{
//         background: "rgba(255,255,255,0.9)",
//         padding: "48px",
//         borderRadius: "30px",
//         boxShadow: "0 8px 40px rgba(0,0,0,0.17)",
//         textAlign: "center",
//         maxWidth: "500px"
//       }}>
//         <h1 style={{
//           color: "#f26157",
//           fontFamily: "Montserrat, Arial, sans-serif",
//           fontWeight: "bold",
//           marginBottom: "24px"
//         }}>
//           Welcome to Fitness Journey Logger
//         </h1>
//         <p style={{
//           color: "#444",
//           fontSize: "20px",
//           marginBottom: "20px"
//         }}>
//           Track your <b>workouts</b>, <b>weight</b>, and <b>fitness goals</b>, all in one easy app!
//         </p>
//         <img style={{
//           width: "80%",
//           borderRadius: "18px",
//           margin: "12px 0",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//         }}
//           src="https://img.freepik.com/free-photo/top-view-perfectly-ordered-fitness-items_23-2150321809.jpg"
//           alt="Fitness Items"
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;
// function Home() {
//   return (
//     <div style={{
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "linear-gradient(120deg, #e1162eff 0%, #eaeef0ff 100%)"
//     }}>
//       <div style={{
//         background: "rgba(255,255,255,0.88)",
//         padding: "48px",
//         borderRadius: "32px",
//         boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
//         textAlign: "center",
//         maxWidth: "520px"
//       }}>
//         <h1 style={{
//           color: "#FF6E7F",
//           fontFamily: "Montserrat, Arial, sans-serif",
//           fontWeight: "bold",
//           marginBottom: "24px"
//         }}>
//           Welcome to Fitness Journey Logger
//         </h1>
//         <p style={{
//           color: "#444",
//           fontSize: "20px",
//           marginBottom: "20px"
//         }}>
//           Track your <b>workouts</b>, <b>weight</b>, and <b>fitness goals</b>, all in one easy app!
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Home;
// import React from "react";

// function Home() {
//   const userEmail = localStorage.getItem("userEmail");
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(120deg, #e1162eff 0%, #eaeef0ff)",
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "48px",
//           borderRadius: "24px",
//           boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
//           maxWidth: "520px",
//           textAlign: "center",
//         }}
//       >
//         <h1 style={{ color: "#ff4f66", marginBottom: "24px" }}>
//           Welcome, {userEmail}!
//         </h1>
//         <p style={{ fontSize: "20px", color: "#444" }}>
//           Track your <b>workouts</b>, <b>weight</b>, and <b>fitness goals</b>,
//           all in one easy app!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import FitnessSummaryPieChart from "./FitnessSummaryPieChart";

// function Home() {
//   const userEmail = localStorage.getItem("userEmail");
//   const navigate = useNavigate();
//   const workoutGoal = 600;
//   const caloriesGoal = 240000;

//   const [pushups, setPushups] = useState(0);
//   const [legWorkouts, setLegWorkouts] = useState(0);
//   const [workoutTotal, setWorkoutTotal] = useState(0);
//   const [caloriesConsumed, setCaloriesConsumed] = useState(0);
//   const [calorieInput, setCalorieInput] = useState("");

//   // Fetch live workout and calorie totals from localStorage on load
//   useEffect(() => {
//     // Fetch workouts
//     const wkData = JSON.parse(localStorage.getItem(`workouts_${userEmail}`)) || [];
//     const totalPushups = wkData.filter(w => w.type && w.type.toLowerCase().includes("push")).reduce((sum, w) => sum + (Number(w.count) || 1), 0);
//     const totalLeg = wkData.filter(w => w.type && w.type.toLowerCase().includes("leg")).reduce((sum, w) => sum + (Number(w.count) || 1), 0);
//     const workoutSum = wkData.reduce((sum, w) => sum + ((Number(w.count)||1)), 0);

//     setPushups(totalPushups);
//     setLegWorkouts(totalLeg);
//     setWorkoutTotal(workoutSum);

//     // Fetch calorie log
//     const dietData = JSON.parse(localStorage.getItem(`diet_${userEmail}`)) || [];
//     const cals = dietData.reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
//     setCaloriesConsumed(cals);
//   }, [userEmail]);

//   // Handle calorie entry submission
//   const handleAddCalories = () => {
//     const cals = Number(calorieInput);
//     if (!cals || cals < 0) {
//       alert("Enter a valid calorie value");
//       return;
//     }
//     const key = `diet_${userEmail}`;
//     const prev = JSON.parse(localStorage.getItem(key)) || [];
//     const updated = [...prev, { calories: cals, date: new Date().toISOString() }];
//     localStorage.setItem(key, JSON.stringify(updated));
//     setCaloriesConsumed(updated.reduce((sum, entry) => sum + Number(entry.calories || 0), 0));
//     setCalorieInput("");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     navigate("/login");
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "start",
//         alignItems: "center",
//         background: "linear-gradient(120deg, #e1162e 0%, #eaeef0 100%)",
//         fontFamily: "'Montserrat', sans-serif",
//         padding: "24px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "48px",
//           borderRadius: "24px",
//           boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
//           maxWidth: "600px",
//           width: "100%",
//           textAlign: "center",
//           marginBottom: "40px",
//         }}
//       >
//         <h1 style={{ color: "#ff4f66", marginBottom: "24px" }}>
//           Welcome, {userEmail}!
//         </h1>
//         <p style={{ fontSize: "20px", color: "#444" }}>
//           Track your <b>workouts</b>, <b>weight</b>, and <b>fitness goals</b> all in one app!
//         </p>
//         <button
//           onClick={handleLogout}
//           style={{
//             marginTop: "30px",
//             padding: "12px 24px",
//             borderRadius: "20px",
//             border: "none",
//             background: "linear-gradient(90deg, #f96174, #ff9a9e)",
//             color: "white",
//             fontWeight: "bold",
//             fontSize: "18px",
//             cursor: "pointer",
//             boxShadow: "0 6px 18px rgba(255, 105, 118, 0.6)",
//             transition: "all 0.3s ease",
//           }}
//         >
//           Logout
//         </button>
//         {/* Calorie input UI */}
//         <div style={{marginTop:32}}>
//           <input
//             type="number"
//             value={calorieInput}
//             onChange={e => setCalorieInput(e.target.value)}
//             placeholder="Add today's calories (e.g. 2000)"
//             style={{ padding: 9, width: 170, fontSize: 15, borderRadius: 8, marginRight: 12}}
//           />
//           <button
//             onClick={handleAddCalories}
//             style={{ padding: "9px 20px", borderRadius: 8, background: "#ff4f66", color: "#fff", border: "none", fontWeight: "bold", cursor: "pointer" }}>
//             Add Calories
//           </button>
//           <div style={{marginTop: 10, color: "#414141", fontSize: "16px"}}>Total Intake: {caloriesConsumed} k/cal</div>
//         </div>
//       </div>
//       {/* Pie chart visualization */}
//       <FitnessSummaryPieChart
//         pushups={pushups}
//         legWorkouts={legWorkouts}
//         workoutCompleted={workoutTotal}
//         workoutGoal={workoutGoal}
//         caloriesConsumed={caloriesConsumed}
//         caloriesGoal={caloriesGoal}
//       />
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FitnessSummaryPieChart from "./FitnessSummaryPieChart";

function Home() {
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const workoutGoal = 600;
  const caloriesGoal = 240000;

  const [pushups, setPushups] = useState(0);
  const [legWorkouts, setLegWorkouts] = useState(0);
  const [workoutTotal, setWorkoutTotal] = useState(0);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [calorieInput, setCalorieInput] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const wkData = JSON.parse(localStorage.getItem(`workouts_${userEmail}`)) || [];
    const totalPushups = wkData.filter(w => w.type && w.type.toLowerCase().includes("push")).reduce((sum, w) => sum + (Number(w.count) || 1), 0);
    const totalLeg = wkData.filter(w => w.type && w.type.toLowerCase().includes("leg")).reduce((sum, w) => sum + (Number(w.count) || 1), 0);
    const workoutSum = wkData.reduce((sum, w) => sum + ((Number(w.count)||1)), 0);

    setPushups(totalPushups);
    setLegWorkouts(totalLeg);
    setWorkoutTotal(workoutSum);

    const dietData = JSON.parse(localStorage.getItem(`diet_${userEmail}`)) || [];
    const cals = dietData.reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
    setCaloriesConsumed(cals);
  }, [userEmail]);

  const handleAddCalories = () => {
    const cals = Number(calorieInput);
    if (!cals || cals < 0) {
      alert("Enter a valid calorie value");
      return;
    }
    const key = `diet_${userEmail}`;
    const prev = JSON.parse(localStorage.getItem(key)) || [];
    const updated = [...prev, { calories: cals, date: new Date().toISOString() }];
    localStorage.setItem(key, JSON.stringify(updated));
    setCaloriesConsumed(updated.reduce((sum, entry) => sum + Number(entry.calories || 0), 0));
    setCalorieInput("");
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        background: "linear-gradient(120deg, #e1162e 0%, #eaeef0 100%)",
        fontFamily: "'Montserrat', sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "48px",
          borderRadius: "24px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          maxWidth: "650px",
          width: "100%",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ color: "#ff4f66", marginBottom: "24px", fontWeight: 700 }}>
          Welcome, {userEmail}!
        </h1>
        <p style={{ fontSize: "20px", color: "#444" }}>
          Track your <b>workouts</b>, <b>weight</b>, and <b>fitness goals</b> all in one app!
        </p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            borderRadius: "20px",
            border: "none",
            background: "linear-gradient(90deg, #f96174, #ff9a9e)",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(255, 105, 118, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Logout
        </button>
        {/* Calorie input section (decorated) */}
        <div
          style={{
            background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
            margin: "38px auto 10px auto",
            maxWidth: 380,
            padding: "28px 26px 18px 26px",
            boxShadow: "0 4px 18px rgba(246, 211, 101, 0.16)",
            borderRadius: 18,
            textAlign: "center",
            position: "relative"
          }}
        >
          <div style={{ fontSize: 30, marginBottom: 8 }}>
            <span role="img" aria-label="nutrition">🥗</span>
          </div>
          <div style={{ fontSize: 21, fontWeight: 600, marginBottom: 3, color: "#a750e7" }}>
            Quick Add Calories
          </div>
          <input
            type="number"
            value={calorieInput}
            onChange={e => setCalorieInput(e.target.value)}
            placeholder="Enter today's calories (eg. 2000)"
            style={{
              padding: 11,
              width: 160,
              fontSize: 17,
              borderRadius: 9,
              background: "#fff8e6",
              border: "1.5px solid #FBAC73",
              marginRight: 12,
              marginBottom: 8
            }}
          />
          <button
            onClick={handleAddCalories}
            disabled={added}
            style={{
              padding: "11px 20px",
              borderRadius: 9,
              background: added
                ? "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
                : "linear-gradient(90deg, #ffaf7b 0%, #d76d77 100%)",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              fontSize: 15,
              boxShadow: "0 2px 7px rgba(255,175,123,0.20)",
              cursor: added ? "not-allowed" : "pointer",
              transition: "background 0.35s"
            }}
          >
            {added ? "Added!" : "Add"}
          </button>
          <div
            style={{
              marginTop: 13,
              color: "#7d2aea",
              fontWeight: 500,
              fontSize: 17,
              letterSpacing: 0.5,
              background: "#f8f2fc",
              padding: "8px 0",
              borderRadius: 8,
              boxShadow: "0 1px 4px rgba(171,113,239,0.04)",
            }}
          >
            Total Intake: <b>{caloriesConsumed.toLocaleString()} kcal</b>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)",
          padding: '32px 18px 36px 18px',
          borderRadius: 24,
          boxShadow: "0 8px 40px rgba(106,17,203,0.14)",
          minWidth: 340,
          marginBottom: 32,
          width: '100%',
          maxWidth: 570
        }}
      >
        <FitnessSummaryPieChart
          pushups={pushups}
          legWorkouts={legWorkouts}
          workoutCompleted={workoutTotal}
          workoutGoal={workoutGoal}
          caloriesConsumed={caloriesConsumed}
          caloriesGoal={caloriesGoal}
        />
      </div>
    </div>
  );
}

export default Home;
