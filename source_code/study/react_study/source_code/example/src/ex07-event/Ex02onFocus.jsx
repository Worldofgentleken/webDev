import { useState } from "react";

function Ex02onFocus() {
    const [msg, setMsg] = useState("포커스 이벤트");

    const handleFocus = () => {
        console.log("Focus");
    }

    const handleBlur = () => {
        console.log("Blur");
    }
    
    return (
        <div>
            <h1>Foucus Example</h1>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur}/>
            <p>message</p>
        </div>
    )
}

export default Ex02onFocus;