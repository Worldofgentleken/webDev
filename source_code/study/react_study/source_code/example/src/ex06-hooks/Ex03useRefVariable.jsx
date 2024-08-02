/*
  const ref = useRef(초기값)
  
  ref.current에 값을 저장하고 유지
  값 변경이 가능하며 컴포넌트가 언마운트 되기 전까지 유지

  주요 사용 용도
    - 값 저장공간
        컴포넌트는 state변화 시 내부 변수들이 초기화 됨
        컴포넌트 업데이트 시 유지할 저장공간으로 사용
	
	  - DOM 요소 접근
	      DOM 요소를 참조하여 접근하는데 사용
*/

import { useState, useRef } from 'react';

function Ex03useRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  let localVal = 0

  console.log('Ex03useRef 렌더링');

  const incrementCountState = () => {
    setCount(count + 1)
  }
  const incrementCountRefState = () => {
    countRef.current = countRef.current + 1;
    console.log(`countRef 증가 ${countRef.current}`);
  }
  const incrementLocalVal = () => {
    localVal = localVal + 1;
    console.log(`localVal 증가 ${localVal}`);
  }

  return (
    <div>
      <h1>useRef Example(저장공간)</h1>
      <p>Count: {count}</p>
      <p>CountRef: {countRef.current}</p>
      <p>LocalVal: {localVal}</p>
      <button onClick={incrementCountState}>Increment State</button>
      <button onClick={incrementCountRefState}>Increment Ref</button>
      <button onClick={incrementLocalVal}>Increment LocalVal</button>
    </div>
  );
}

export default Ex03useRef;
