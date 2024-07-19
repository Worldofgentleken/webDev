import { useState } from "react";

function Ex01onClick() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>onClick Example</h1>
            <p>버튼 틀릭 횟수 : {count}</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

export default Ex01onClick;
