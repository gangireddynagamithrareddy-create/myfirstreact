import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "Shubman Gill", score: 75 },
    { name: "KL Rahul", score: 68 },
    { name: "Hardik Pandya", score: 82 },
    { name: "Ravindra Jadeja", score: 74 },
    { name: "Rishabh Pant", score: 65 },
    { name: "Mohammed Shami", score: 72 },
    { name: "Jasprit Bumrah", score: 60 },
    { name: "Mohammed Siraj", score: 58 },
    { name: "Kuldeep Yadav", score: 71 }
  ];

  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;