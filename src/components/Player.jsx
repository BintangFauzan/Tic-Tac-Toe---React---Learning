import {useState} from "react";

export default function Player ({inisialNama, playerSymbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(inisialNama);
    const [isEditing, setEditing] = useState(false);
    function handleEdit() {
        setEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(playerSymbol, playerName)
        }
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing){
        editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>)
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    // function handleSave() {
    //     setEditing(false);
    // }
    return (
        <>
            <li className={isActive ? "active" : ""}>
                <span className="player">
                   {editablePlayerName}
                  <span className="player-symbol">{playerSymbol}</span>
                    {isEditing === true ? <button  onClick={() => handleEdit()}>Save</button> : <button onClick={() => handleEdit()}>Edit</button>}
                </span>
            </li>
        </>
    )
}