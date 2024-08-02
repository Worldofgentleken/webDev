import React, { useEffect, useState } from "react";

function Tick() {
    const [time, setTime] = useState(new Date()); //hook
    // state는 컴포넌트가 가지는 값(변수)
    // props랑 다름

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        // 컴포넌트가 언마운트 될 때 인터벌 정리
        return () => clearInterval(interval);
    });

    console.log('Tick 화면에 렌더링');

    return (
        <div>
            <h1>현재 시간</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Tick;