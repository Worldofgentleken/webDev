import React, { useState } from "react";

function Ex03BadCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("홍길동"); // 렌더링과 무관한 state

  const increment = () => {
    setCount(count + 1);
    if (count === 3) {
      setName("도라에몽");
    }
  };
  console.log("BadCounter 렌더링");

  return (
    <div>
      <h1>이름: {name}</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Ex03BadCounter;
