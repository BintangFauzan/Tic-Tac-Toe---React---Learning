import './App.css';
import Player from './components/Player'
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import Log from "./components/Log";

function App() {
    const [ActivePlayer, SetActivePlayer] = useState('X')
    function handlePlayer(player) {
        SetActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X')
    }
    const [gameTurns, setGameTurns] = useState([])
  return (
      <main>
        <section id="game-container">
          <ol id="players" className="highlight-player">
              <Player isActive={ActivePlayer === 'X'} inisialNama={"Player 1"} playerSymbol={"X"}/>
              <Player isActive={ActivePlayer === 'O'} inisialNama={"Player 2"} playerSymbol={"O"}/>
          </ol>
            <GameBoard onPlayer={handlePlayer} activePlayerSymbol={ActivePlayer} />
        </section>
          <Log/>
      </main>
  );
}

export default App;
