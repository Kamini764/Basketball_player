import React from 'react'
import BasketballPlayerCard from '../basketballplayer/BasketballPlayerCard'

const Dashboard = () => {
  return (
    <div>
      <BasketballPlayerCard 
        name="LeBron James"
        image=" ../player3.jpg"
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1,
        reboundsPerGame: 10.5 }}
      />
    </div>
  )
}

export default Dashboard


