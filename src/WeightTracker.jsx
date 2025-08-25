import React, { useState, useEffect } from "react";

function getCurrentUserEmail() {
  return localStorage.getItem("userEmail");
}

function getUserDataKey(base) {
  const email = getCurrentUserEmail();
  return email ? `${base}_${email}` : base;
}

function getUserWeights() {
  return JSON.parse(localStorage.getItem(getUserDataKey("weights"))) || [];
}

function saveUserWeights(weights) {
  localStorage.setItem(getUserDataKey("weights"), JSON.stringify(weights));
}

function WeightTracker() {
  const [weights, setWeights] = useState([]);
  const [weightInput, setWeightInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setWeights(getUserWeights());
  }, []);

  const addOrUpdateWeight = () => {
    if (!weightInput || !dateInput) {
      alert("Please enter both date and weight");
      return;
    }

    let updated;
    if (editIndex !== null) {
      updated = [...weights];
      updated[editIndex] = { date: dateInput, weight: weightInput };
      setEditIndex(null);
    } else {
      updated = [...weights, { date: dateInput, weight: weightInput }];
    }
    setWeights(updated);
    saveUserWeights(updated);
    setWeightInput("");
    setDateInput("");
  };

  const editWeight = (index) => {
    setEditIndex(index);
    setDateInput(weights[index].date);
    setWeightInput(weights[index].weight);
  };

  const deleteWeight = (index) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const updated = weights.filter((_, i) => i !== index);
      setWeights(updated);
      saveUserWeights(updated);
      if (editIndex === index) {
        setEditIndex(null);
        setDateInput("");
        setWeightInput("");
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
        background: "linear-gradient(120deg,#67B26F 0%, #4ca2cd 100%)",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.93)",
          padding: 34,
          borderRadius: 24,
          boxShadow: "0 7px 24px rgba(0,0,0,0.13)",
          width: 340,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#3473ff",
            marginBottom: 18,
            fontFamily: "Montserrat, Arial",
          }}
        >
          {editIndex !== null ? "Edit Weight Entry" : "Weight Tracker"}
        </h2>
        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weightInput}
          onChange={(e) => setWeightInput(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button
          onClick={addOrUpdateWeight}
          style={{
            ...buttonStyle,
            background: "linear-gradient(90deg, #3473ff 0%, #89f7fe 100%)",
          }}
        >
          {editIndex !== null ? "Update Entry" : "Add Entry"}
        </button>

        <h3 style={{ marginTop: 28, color: "#444" }}>Weight Logs</h3>
        <ul style={{ paddingLeft: 0 }}>
          {weights.length === 0 && <li style={logStyle}>No weight entries yet.</li>}
          {weights.map((entry, i) => (
            <li key={i} style={logStyle}>
              <div>
                <b>{entry.date}</b>: <span style={{ color: "#3473ff" }}>{entry.weight} kg</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <button onClick={() => editWeight(i)} style={actionButtonStyle}>
                  Edit
                </button>
                <button onClick={() => deleteWeight(i)} style={actionButtonStyle}>
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
  borderRadius: 6,
  fontWeight: "bold",
  fontSize: 16,
  marginTop: 8,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  color: "#fff",
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
  background: "#3473ff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

export default WeightTracker;
