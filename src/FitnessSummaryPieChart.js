import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FitnessSummaryPieChart({
  pushups,
  legWorkouts,
  workoutCompleted,
  workoutGoal,
  caloriesConsumed,
  caloriesGoal
}) {
  const pieData = {
    labels: [
      `Push Ups (${pushups})`,
      `Leg Workouts (${legWorkouts})`,
      "Workouts Remaining",
      "Calories Consumed",
      "Calories To Goal"
    ],
    datasets: [
      {
        data: [
          pushups,
          legWorkouts,
          Math.max(workoutGoal - workoutCompleted, 0),
          caloriesConsumed,
          Math.max(caloriesGoal - caloriesConsumed, 0)
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#bdbdbd",
          "#FFCE56",
          "#d0d0d0"
        ]
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: true, position: "bottom" }
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 16px rgba(0,0,0,0.04)", padding: 20 }}>
      <h3 style={{ textAlign: "center", color: "#185a9d", marginBottom: 16 }}>
        Fitness Progress Overview
      </h3>
      <Pie data={pieData} options={options} />
      <div style={{ textAlign: "center", marginTop: 20, fontSize: 17 }}>
        <b>Push-ups:</b> {pushups}, <b>Leg Workouts:</b> {legWorkouts} <br />
        <b>Workout:</b> {workoutCompleted}/{workoutGoal} &nbsp;
        <b>Calories:</b> {caloriesConsumed} / {caloriesGoal}
      </div>
    </div>
  );
}
