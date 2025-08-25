import React, { useState, useEffect } from "react";

function CalorieLogger({ userEmail, onCaloriesChange }) {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem(`diet_${userEmail}`)) || [];
    setEntries(savedEntries);
  }, [userEmail]);

  useEffect(() => {
    if (onCaloriesChange) {
      const total = entries.reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
      onCaloriesChange(total);
    }
  }, [entries, onCaloriesChange]);

  const addEntry = () => {
    const calories = Number(input);
    if (!calories || calories <= 0) return alert("Enter a valid calorie amount.");
    const updated = [...entries, { calories, date: new Date().toISOString() }];
    setEntries(updated);
    localStorage.setItem(`diet_${userEmail}`, JSON.stringify(updated));
    setInput("");
  };

  return (
    <div style={{ background: "linear-gradient(120deg, #f6d365, #fda085)", padding: 20, borderRadius: 18, boxShadow: "0 4px 15px rgba(246, 211, 101, 0.18)", textAlign: "center" }}>
      <h3 style={{ color: "#6a1b9a", marginBottom: 16 }}>Log Daily Calories</h3>
      <input
        type="number"
        placeholder="Enter calories"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 10, width: '60%', marginRight: 10, borderRadius: 6, border: "1.5px solid #fbac73", fontSize: 16 }}
      />
      <button onClick={addEntry} style={{ padding: "10px 16px", background: "#a975e2", color: "#fff", border: "none", borderRadius: 10, cursor: "pointer" }}>
        Add
      </button>
      <p style={{ marginTop: 14, fontWeight: "bold", fontSize: 18, color: "#6a1b9a" }}>
        Total Calories: {entries.reduce((sum, e) => sum + Number(e.calories), 0)}
      </p>
    </div>
  );
}

export default CalorieLogger;
