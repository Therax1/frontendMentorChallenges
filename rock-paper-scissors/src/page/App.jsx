import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Game from '../components/Game';

function App() {


  return(
    <div className="container">
      <Header />
        <Game />
    </div>
  );
}

export default App;