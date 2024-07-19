/*
함수 컴포넌트에서 상태를 관리하는데 사용
상태 변수 및 상태 변수를 업데이트 하는 함수를 반환
const [state, setState] = useState(초기값);
*/

import { useState } from "react";


function Ex01useState(){
    const [count,setCount] = useState(0);

    console.log('Component Call!!');

    const increment = () =>{
        setCount(count + 1);
    }

    return (
        <div>
            <h1>useState Example</h1>
            <p>Count: {count}</p>
            <button type="button" onClick={increment}>증가</button>
            <button type="button" onClick={() => setCount(count - 1)}>감소</button>
        </div>
    )
}
export default Ex01useState;