import React from 'react'
import '../basketballplayer/BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div>
           <div className="player-card">
            <div className="img-box">
            <img src={image} alt={`${name}`} className="player-image" />
            </div>
            <div className="content">
             <h2 className="player-name">{name}</h2>
             <p className="player-position">{position}</p>
                <div className="player-stats">
                <p>Points per Game: {stats.pointsPerGame}</p>
                <p>Assists per Game: {stats.assistsPerGame}</p>
                <p>Rebounds per Game: {stats.reboundsPerGame}</p>
                </div>
            </div>    
            </div>
    </div>
  )
}

export default BasketballPlayerCard