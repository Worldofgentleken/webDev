/*
콜백 함수의 메모이제이션에 사용
콜백 함수가 불필요하게 재생성되는 것을 방지

  const cachedFunc = useCallback(func, dependencies?)
*/
import React, { useState, useCallback, useEffect, useRef } from 'react';
import Ex07useCallbackChild from './Ex07useCallbackChild';

function Ex07useCallbackAfter() {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    // useCallback을 사용하여 increment 함수가 항상 동일한 참조를 가지도록 설정
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // 빈 배열로 설정하여 함수가 한 번만 생성되도록 함

    const prevIncrementRef = useRef();
    
    useEffect(() => {
        console.log(
            'increment 함수 참조 변경 여부:', prevIncrementRef.current !== increment
        );
        prevIncrementRef.current = increment;
        setRenderCount(prevRenderCount => prevRenderCount + 1);
    }, [increment]);

    return (
        <div>
            <h1>useCallback Simple Example(적용)</h1>
            <Ex07useCallbackChild onClick={increment} />
            <p>Count: {count}</p>
            <p>Render Count: {renderCount}</p>
        </div>
    );
}

export default Ex07useCallbackAfter;
