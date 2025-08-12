import React from "react";

function ListofPlayers() {
  // Array of players with name & score
  const players = [
    { name: "Virat Kohli", score: 90 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shikhar Dhawan", score: 65 },
    { name: "KL Rahul", score: 75 },
    { name: "Rishabh Pant", score: 50 },
    { name: "Hardik Pandya", score: 88 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "Jasprit Bumrah", score: 40 },
    { name: "Mohammed Shami", score: 72 },
    { name: "Bhuvneshwar Kumar", score: 60 },
    { name: "Yuzvendra Chahal", score: 55 },
  ];

  // Filter players with score below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
