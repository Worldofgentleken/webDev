import React, { useState, useEffect, useRef } from 'react';
import Ex07useCallbackChild from './Ex07useCallbackChild';

function Ex07useCallbackBefore() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1); 
    // useCallback 사용하지 않음

    const prevIncrementRef = useRef();
    
    useEffect(() => {
        console.log(
            'increment 함수 참조 변경 여부:', prevIncrementRef.current !== increment);
            prevIncrementRef.current = increment;
    }, [increment]);

    return (
        <div>
            <h1>useCallback Simple Example(미)</h1>
            <Ex07useCallbackChild onClick={increment} />
            <p>Count: {count}</p>
        </div>
    );
}

export default Ex07useCallbackBefore;
