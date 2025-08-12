import React from "react";

function IndianPlayers() {
  // Odd & Even team using destructuring
  const oddTeam = ["Player1", "Player3", "Player5", "Player7", "Player9", "Player11"];
  const evenTeam = ["Player2", "Player4", "Player6", "Player8", "Player10"];

  // Merge T20 and Ranji Trophy players
  const T20players = ["Kohli", "Rohit", "Pant"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Ishant"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers]; // Spread operator

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged List of T20 & Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
