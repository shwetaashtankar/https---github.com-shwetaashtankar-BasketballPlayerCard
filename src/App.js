import React from 'react';
import './index.css'; // Link to your CSS file
import BasketballPlayerCard from './components/BasketballPlayerCard';
import dummyImage from './image/dummy.jpg';

export function App() {
  const lebronImage = 'https://example.com/lebron.jpg';
  return (
    <div className="App">
        <h1>Basket-Ball Player Card</h1>
        <BasketballPlayerCard 
        name="LeBron James"
        image={lebronImage}
        dummy={dummyImage}
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
      />
    </div>
  );
}

export default App;
