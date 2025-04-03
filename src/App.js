import Player from './components/Player'
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from "./WinningCombination";

const PLAYER = {
    X: 'Player 1',
    O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

function deriveActivePlayer(gameTruns) {
    let Currentplayer = 'X'
    if (gameTruns.length > 0 && gameTruns[0].player === 'X'){
        Currentplayer = 'O'
    }
    return Currentplayer
}

function derriveGameBoard(gameTruns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

    for (const turn of gameTruns) {
        const { square, player } = turn
        const { row, col } =  square

        gameBoard[row][col] = player
    }
    return gameBoard
}

function derriveWinner(gameBoard, player) {

    let winner = null

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = player[firstSquareSymbol]
        }
    }
    return winner
}
function App() {
    const [player, setPlayer] = useState(PLAYER)

    const [gameTruns,SetGameTruns]= useState([]);
    const gameBoard =  derriveGameBoard(gameTruns);
    const activePlayer = deriveActivePlayer(gameTruns);
    const winner = derriveWinner(gameBoard, player);
    const hasDraw = gameTruns.length === 9 && !winner;

    function handlePlayer(rowIndex, colIndex) {
        SetGameTruns((prevTurns) => {
            const CurrentPlayer = deriveActivePlayer(prevTurns);

            const updateTurns = [{ square : { row: rowIndex, col : colIndex }, player : CurrentPlayer },
                ...prevTurns];
            return updateTurns;
        })
    }

    function handleRematch() {
        SetGameTruns([])
    }

    function handlePlayerName(playerSymbol, newName) {
        setPlayer(prevPlayers => {
            return {
                ...prevPlayers,
                [playerSymbol]: newName
            }
        })
    }

  return (
      <main>
        <section id="game-container">
          <ol id="players" className="highlight-player">
              <Player isActive={activePlayer === 'X'} inisialNama={PLAYER.X} playerSymbol={"X"} onChangeName={handlePlayerName}/>
              <Player isActive={activePlayer === 'O'} inisialNama={PLAYER.O} playerSymbol={"O"} onChangeName={handlePlayerName}/>
          </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
            <GameBoard onPlayer={handlePlayer} bord={gameBoard} />
        </section>
          <Log Truns={gameTruns}/>
      </main>
  );
}

export default App;
