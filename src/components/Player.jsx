import {useState} from "react";

export default function Player ({classNama, inisialNama, playerSymbol, isActive}) {
    const [playerName, setPlayerName] = useState(inisialNama);
    const [isEditing, setEditing] = useState(false);
    function handleEdit() {
        setEditing((editing) => !editing);
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
                   {isEditing === true ? <input type="text" required value={playerName} onChange={handleChange}/> :  <span className="player-name">{playerName}</span>}
                  <span className="player-symbol">{playerSymbol}</span>
                    {isEditing === true ? <button onClick={() => handleEdit()}>Save</button> : <button onClick={() => handleEdit()}>Edit</button>}
                </span>
            </li>
        </>
    )
}