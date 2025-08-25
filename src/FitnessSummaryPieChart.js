import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FitnessSummaryChart({
  pushups,
  legWorkouts,
  workoutTotal,
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
      "Calories Remaining"
    ],
    datasets: [
      {
        data: [
          pushups,
          legWorkouts,
          Math.max(workoutGoal - workoutTotal, 0),
          caloriesConsumed,
          Math.max(caloriesGoal - caloriesConsumed, 0)
        ],
        backgroundColor: [
          "#FF6384",   // Push Ups - Vivid Pink
          "#36A2EB",   // Leg Workouts - Vivid Blue
          "#FFC20A",   // Workouts Remaining - Bright Yellow
          "#43A047",   // Calories Consumed - Rich Green
          "#8E24AA"    // Calories Remaining - Deep Purple (makes this segment always highly visible)
        ],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 30,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1000,
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: 16,
            weight: "600",
            family: "'Montserrat', sans-serif"
          },
          padding: 20,
          boxWidth: 20,
          boxHeight: 20
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.75)",
        titleFont: { size: 18, weight: "bold" },
        bodyFont: { size: 16 },
        padding: 12,
        cornerRadius: 8,
      }
    },
    layout: {
      padding: 24
    }
  };

  return (
    <div
      style={{
        maxWidth: 520,
        margin: "auto",
        padding: 30,
        borderRadius: 24,
        background: "#fff",
        boxShadow: "0 10px 35px rgba(0,0,0,0.12)"
      }}
    >
      <h2
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "#2c3e50",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: 1,
          textAlign: "center",
          marginBottom: 30
        }}
      >
        Fitness Progress Overview
      </h2>
      <div style={{ height: 350 }}>
        <Pie data={pieData} options={options} />
      </div>
      <div
        style={{
          marginTop: 25,
          fontSize: 18,
          fontWeight: 600,
          fontFamily: "'Montserrat', sans-serif",
          color: "#444",
          textAlign: "center",
          lineHeight: 1.5
        }}
      >
        <div>Push-ups: {pushups}</div>
        <div>Leg Workouts: {legWorkouts}</div>
        <div>Workout Progress: {workoutTotal} / {workoutGoal}</div>
        <div>Calories: {caloriesConsumed.toLocaleString()} / {caloriesGoal.toLocaleString()}</div>
      </div>
    </div>
  );
}
