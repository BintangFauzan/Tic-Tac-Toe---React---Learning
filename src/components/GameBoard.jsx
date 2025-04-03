export default function GameBoard({onPlayer, bord}) {


    // const [SelectedBoard, SetBoard] = useState(initialGamebord);
    // function handleClickBoard(rowIndex, colIndex) {
    //     SetBoard((PrevGameBoard) => {
    //         const UpdateGameBoard = [...PrevGameBoard.map(InnerArray => [...InnerArray])]
    //         UpdateGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return UpdateGameBoard;
    //      })
    //     onPlayer();
    // }
    return (
        <>
            <ol id="game-board">
                {bord.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button disabled={playerSymbol !== null} onClick={() => onPlayer(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    )
}