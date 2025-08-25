import React, { useState, useEffect } from "react";

function getCurrentUserEmail() {
  return localStorage.getItem("userEmail");
}

function getUserDataKey(base) {
  const email = getCurrentUserEmail();
  return email ? `${base}_${email}` : base;
}

function getUserGoals() {
  const key = getUserDataKey("goals");
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveUserGoals(goals) {
  const key = getUserDataKey("goals");
  localStorage.setItem(key, JSON.stringify(goals));
}

function Goals() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedGoals = getUserGoals();
    setGoals(storedGoals);
  }, []);

  const addOrUpdateGoal = () => {
    if (!goalInput.trim()) {
      alert("Please enter a goal");
      return;
    }

    let updatedGoals;
    if (editIndex !== null) {
      updatedGoals = [...goals];
      updatedGoals[editIndex] = goalInput.trim();
      setEditIndex(null);
    } else {
      updatedGoals = [...goals, goalInput.trim()];
    }

    setGoals(updatedGoals);
    saveUserGoals(updatedGoals);
    setGoalInput("");
  };

  const editGoal = (index) => {
    setGoalInput(goals[index]);
    setEditIndex(index);
  };

  const deleteGoal = (index) => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      const updatedGoals = goals.filter((_, i) => i !== index);
      setGoals(updatedGoals);
      saveUserGoals(updatedGoals);

      if (editIndex === index) {
        setGoalInput("");
        setEditIndex(null);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg,#f6d365 0%, #fda085 100%)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: 40,
          borderRadius: 28,
          boxShadow: "0 7px 24px rgba(0,0,0,0.12)",
          width: 340,
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#f26157", marginBottom: 18, fontFamily: "Montserrat, Arial" }}>
          {editIndex !== null ? "Edit Fitness Goal" : "Set Fitness Goals"}
        </h2>
        <input
          type="text"
          placeholder="Enter a goal (e.g. Lose 5 kg)"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button onClick={addOrUpdateGoal} style={buttonStyle}>
          {editIndex !== null ? "Update Goal" : "Add Goal"}
        </button>
        <h3 style={{ color: "#444", marginTop: 28 }}>Your Goals</h3>
        <ul style={{ paddingLeft: 0 }}>
          {goals.length === 0 && <li style={logStyle}>No goals set yet.</li>}
          {goals.map((goal, i) => (
            <li key={i} style={logStyle}>
              {goal}
              <div style={{ marginTop: 6 }}>
                <button onClick={() => editGoal(i)} style={actionButtonStyle}>
                  Edit
                </button>
                <button onClick={() => deleteGoal(i)} style={actionButtonStyle}>
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
  marginTop: 6,
  marginBottom: 10,
  border: "1px solid #eee",
  borderRadius: 6,
  fontSize: 15,
  background: "#fff",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: 12,
  border: "none",
  borderRadius: 8,
  background: "linear-gradient(90deg, #fda085 0%, #f6d365 100%)",
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
  marginTop: 8,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const logStyle = {
  listStyleType: "none",
  padding: 10,
  background: "#fff",
  borderRadius: 8,
  margin: "8px 0",
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

export default Goals;
