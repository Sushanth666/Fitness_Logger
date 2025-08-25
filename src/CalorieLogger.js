import React, { useState, useEffect } from "react";

function CalorieLogger({ userEmail, onCaloriesChange }) {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem(`diet_${userEmail}`)) || [];
    setEntries(storedEntries);
  }, [userEmail]);

  // Call this whenever entries are updated, to recalculate and notify parent
  useEffect(() => {
    const total = entries.reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
    onCaloriesChange && onCaloriesChange(total);
  }, [entries, onCaloriesChange]);

  function addEntry() {
    const cals = Number(input);
    if (!cals || cals <= 0) {
      alert("Enter a valid calorie value");
      return;
    }
    const newEntries = [...entries, { calories: cals, date: new Date().toISOString() }];
    setEntries(newEntries);
    localStorage.setItem(`diet_${userEmail}`, JSON.stringify(newEntries));
    setInput("");
  }

  return (
    <div style={{ margin: "16px 0" }}>
      <h4>Log Calorie Intake</h4>
      <input
        type="number"
        value={input}
        placeholder="Calories (e.g. 2000/day)"
        onChange={e => setInput(e.target.value)}
        style={{ marginRight: 8, padding: 4 }}
      />
      <button onClick={addEntry}>Add</button>
      <div style={{ marginTop: 8 }}>
        <strong>Total Logged Calories: {entries.reduce((sum, e) => sum + Number(e.calories || 0), 0)}</strong>
      </div>
    </div>
  );
}

export default CalorieLogger;
