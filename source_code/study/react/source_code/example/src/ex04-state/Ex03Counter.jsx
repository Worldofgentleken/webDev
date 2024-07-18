import React, { useState } from "react";
import Ex03CounterView from "./Ex03CounterView";

function Ex03Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  console.log("Counter 렌더링");

  return (
    <div>
      <h1>이름: {(count >= 3) ? "도라에몽" : "홍길동"}</h1>
      <Ex03CounterView count={count} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Ex03Counter;
