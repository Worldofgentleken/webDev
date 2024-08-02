import React, { useState, useEffect } from "react";

const Lifecycle = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  console.log("😃1. Lifecycle 컴포넌트 함수가 호출 되었습니다.");
  useEffect(() => {
    console.log("😃3. componentDidMount: 컴포넌트가 마운트되었습니다.");

    // 네트워크 요청
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("😃3-n. 외부 요청 결과 응답을 통해 data state 변경 감지");
        setTimeout(() => {
          setData(data);
          console.log("😃3-n. 3초 후 data state 변경");
        }, 3000);
      });

    // componentWillUnmount
    return () => {
      console.log(
        "😃5. componentWillUnmount: 컴포넌트가 언마운트될 준비가 되었습니다."
      );
    };
  }, []);

  useEffect(() => {
    console.log("😃4. componentDidUpdate: 컴포넌트가 업데이트되었습니다.");
  }, [data, count]);

  console.log("😃2. Render: 컴포넌트를 렌더링합니다.");

  return (
    <div>
      <h1>Example Component</h1>
      <p>
        Data: {data ? JSON.stringify(data) : "Loading..."}
      </p>
      <p>Count: {count}</p>
    </div>
  );
};

export default Lifecycle;
