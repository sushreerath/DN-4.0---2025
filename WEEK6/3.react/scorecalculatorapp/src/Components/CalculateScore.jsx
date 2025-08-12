import React, { useState } from "react";
import "./Stylesheets/mystyle.css";

function CalculateScore({ name, school, total, goal }) {
  const [average, setAverage] = useState(0);

  const calculateAverage = () => {
    const avg = total / goal;
    setAverage(avg.toFixed(2));
  };

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>

      <button onClick={calculateAverage}>Calculate Average</button>

      {average > 0 && (
        <p className="average">Average Score: {average}</p>
      )}
    </div>
  );
}

export default CalculateScore;
