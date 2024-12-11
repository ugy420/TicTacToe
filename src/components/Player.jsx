import { useState } from "react"

export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName); 
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {!isEditing && <span className="player-name" required>{playerName}</span>}
        {isEditing && <input type="text" value={playerName} onChange={handleChange}/>}
        <span span className="player-smybol">{symbol}</span> 
        </span>
        <button onClick={handleEditing}>
            {isEditing ?'Save':'Edit'}
        </button>
    </li>
    ) 
}