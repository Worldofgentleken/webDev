import { useState } from 'react';

function Ex01Counter(){
  console.log('카운터 렌더링');
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(10);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={increment}>증가</button>
      <h1>카운트1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>증가</button>
    </div>
  );
}

export default Ex01Counter;