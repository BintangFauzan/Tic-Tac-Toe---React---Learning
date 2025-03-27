import {useState} from "react";

const initialGamebord = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
]
export default function GameBoard({onPlayer, activePlayerSymbol}) {
    const [SelectedBoard, SetBoard] = useState(initialGamebord);
    function handleClickBoard(rowIndex, colIndex) {
        SetBoard((PrevGameBoard) => {
            const UpdateGameBoard = [...PrevGameBoard.map(InnerArray => [...InnerArray])]
            UpdateGameBoard[rowIndex][colIndex] = activePlayerSymbol
            return UpdateGameBoard;
         })
        onPlayer();
    }
    return (
        <>
            <ol id="game-board">
                {SelectedBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleClickBoard(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    )
}