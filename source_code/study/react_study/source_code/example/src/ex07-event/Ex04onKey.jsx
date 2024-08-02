import { useState } from "react"

function Ex04onKey() {
    const [key, setKey] = useState("");

    const handleKeyDown = (event) =>{
        setKey(`키 누름: ${event.key}`)
    }
    const handleKeyup = (event) =>{
        setKey(`키 땜: ${event.key}`)
    }

    return(
        <div>
            <h1>onKey Example</h1>
            <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyup}/>
            <p>{key}</p>
        </div>
    )
}

export default Ex04onKey;