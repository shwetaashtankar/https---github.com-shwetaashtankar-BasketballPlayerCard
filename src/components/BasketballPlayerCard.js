import React from 'react';
import './BasketballPlayerCard.css'; // Ensure this CSS file is correctly linked

function BasketballPlayerCard({ name, image, dummy, position, stats }) {
  const playerImage = image !== 'https://example.com/lebron.jpg' ? image : dummy;

  return (
    <div className="player-card">
      <img src={playerImage} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>   
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
}

export default BasketballPlayerCard;
