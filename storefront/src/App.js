import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import {GameView} from "./components/GameView";
function App() {
  const [gameTitle, setGameTitle] = useState('');
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>
          Назва гри: {' '}
          <input
           value={gameTitle}
           onChange={({ target }) => setGameTitle(target.value)} 
           onBlur={() => {
            fetch(`/steam/games/search/${gameTitle}`)
            .then(res => res.json())
            .then(data => setResult(data))
           }}
            />
        </label>
        { result && result.map(game => <GameView {...game} />) }
      </header>
    </div>
  );
}

export default App;
