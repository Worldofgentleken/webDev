import React, { useState } from 'react';
import Ex06useMemo from './Ex06useMemo';

const Ex06useMemoParent = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [otherState, setOtherState] = useState(0);

    console.log('Ex06useMemo 렌더링');

    return (
        <div>
            <h1>useMemo Simple Example</h1>
            <Ex06useMemo a={a} b={b} />
            <button onClick={() => setA(a + 1)}>A 증가</button>
            <button onClick={() => setB(b + 1)}>B 증가</button>
            <button onClick={() => setOtherState(otherState + 1)}>Increment Other State</button>
            <p>Other State: {otherState}</p>
        </div>
    );
};

export default Ex06useMemoParent;
