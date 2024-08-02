import { useState } from "react";

function Ex06onSubmit(){
    const [value, setValue] = useState("");

    const handle =(e)=> {
        e.preventDefault();
        console.log("전송될 값 확인:", value);
        // 여기서 form태그 내에 선언된 여러 사용자 입력 태그로부터
        // 값들을 가져와서 비동기 요청을 할 수 있음
    }
    return(
        <div>
            <h1>onSubmit Example</h1>
            <form onSubmit={handle}>
                <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default Ex06onSubmit;