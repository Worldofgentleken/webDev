import { useState } from "react"

function Ex03onMouse() {
    const [msg, setMsg] = useState("Msg");

    const handleMouseEnter = () => setMsg("마우스 들어감");
    const handleMouseLeave = () => setMsg("마우스 이벤트");
    const handleMouseOver = () => setMsg("마우스 올라감");
    return(
        <div>
            <h1> onMouse Example</h1>
            <p>{msg}</p>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Button1</button>
            <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Button2</button>
            <h2 onClick={()=>setMsg("클릭됨")} onMouseOver={handleMouseOver}>여기도 이벤트 등록 가능</h2>
        </div>
    )
}

export default Ex03onMouse;