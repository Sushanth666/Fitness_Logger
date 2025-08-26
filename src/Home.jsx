import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FitnessSummaryChart from "./FitnessSummaryChart";
import CalorieLogger from "./CalorieLogger";

function Home() {
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  // Fitness goals (customize as needed)
  const workoutGoal = 600;
  const caloriesGoal = 240000;

  // Local state
  const [pushups, setPushups] = useState(0);
  const [legWorkouts, setLegWorkouts] = useState(0);
  const [workoutTotal, setWorkoutTotal] = useState(0);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);

  useEffect(() => {
    // Auth redirect: If not logged in, route to login
    if (!userEmail) {
      navigate("/login");
      return;
    }

    // Load workout stats for the user
    const wkData = JSON.parse(localStorage.getItem(`workouts_${userEmail}`)) || [];
    const totalPushups = wkData
      .filter(w => w.type && w.type.toLowerCase().includes("push"))
      .reduce((sum, w) => sum + Number(w.count || 1), 0);
    const totalLeg = wkData
      .filter(w => w.type && w.type.toLowerCase().includes("leg"))
      .reduce((sum, w) => sum + Number(w.count || 1), 0);
    const totalWorkout = wkData.reduce((sum, w) => sum + Number(w.count || 1), 0);

    setPushups(totalPushups);
    setLegWorkouts(totalLeg);
    setWorkoutTotal(totalWorkout);

    // Load calorie data for the user
    const dietEntries = JSON.parse(localStorage.getItem(`diet_${userEmail}`)) || [];
    const totalCalories = dietEntries.reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
    setCaloriesConsumed(totalCalories);
  }, [userEmail, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Montserrat', sans-serif",
        background: "linear-gradient(120deg, #e1162e 0%, #eaeef0 100%)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200, marginBottom: 40 }}>
        <div
          style={{
            background: "#fff",
            padding: 48,
            borderRadius: 24,
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            gap: 32,
          }}
        >
          {/* Left: Welcome Card + Calorie Logger */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1 400px",
              maxWidth: 450,
              gap: 24,
            }}
          >
            {/* Welcome card */}
            <div
              style={{
                width: "100%",
                padding: 32,
                borderRadius: 24,
                background:
                  "linear-gradient(120deg, #ffe2ec 0, #ffd6e0 100%)",
                boxShadow: "0 6px 22px rgba(255, 86, 104, 0.16)",
                textAlign: "center",
              }}
            >
              <h1 style={{ color: "#ff4f66", fontWeight: 700, marginBottom: 16, fontSize: 28 }}>
                Welcome, <span style={{ fontWeight: 700 }}>{userEmail}</span>!
              </h1>
              <p style={{ fontSize: 20, color: "#444", marginBottom: 24 }}>
                Track your <b>workouts</b>, <b>weight</b>, and <b>fitness goals</b> all in one app!
              </p>
              <button
                onClick={handleLogout}
                style={{
                  padding: "12px 24px",
                  borderRadius: 20,
                  border: "none",
                  background: "linear-gradient(90deg, #f96174, #ff9a9e)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                  cursor: "pointer",
                  boxShadow: "0 6px 18px rgba(255, 105, 118, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                Logout
              </button>
            </div>

            {/* Calorie Logger below Welcome Card */}
            <div style={{ width: "100%" }}>
              <CalorieLogger userEmail={userEmail} onCaloriesChange={setCaloriesConsumed} />
            </div>
          </div>

          {/* Right: Pie Chart */}
          <div style={{ flex: "1 1 450px", minWidth: 340, maxWidth: 520 }}>
            <FitnessSummaryChart
              pushups={pushups}
              legWorkouts={legWorkouts}
              workoutTotal={workoutTotal}
              workoutGoal={workoutGoal}
              caloriesConsumed={caloriesConsumed}
              caloriesGoal={caloriesGoal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
