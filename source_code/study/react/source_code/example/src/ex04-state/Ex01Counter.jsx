import { useState } from "react";

function Ex01Counter(){
    const [count, setCount] = useState(0);
    let cnt = 0;

    const increment = () => {
        setCount(count + 1);
        cnt++;
        console.log('count', count);
        console.log('cnt', cnt);
    }
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <button onClick={increment}>증가</button>
        </div>
    );
}

export default Ex01Counter;