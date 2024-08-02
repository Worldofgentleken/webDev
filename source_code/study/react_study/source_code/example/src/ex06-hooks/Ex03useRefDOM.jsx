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

import { useRef, useEffect, useState } from 'react';

function Ex03useRefDOM() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus(); // 컴포넌트가 마운트되면 input 요소에 포커스 설정
  }, []); // 빈 배열을 전달하여 이 효과가 컴포넌트 마운트 시에만 실행되도록 함

  const handleAlert = () => {
    const inputValue = inputRef.current.value;
    alert(`입력한 값: ${inputValue}`);
    inputRef.current.value = '';
    inputRef.current.focus(); // alert이 닫히면 다시 포커스 설정
  };

  console.log('Ex03useRefDOM 렌더링');

  return (
    <div>
      <h1>useRef Example(DOM 요소 접근)</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleAlert}>확인</button>
    </div>
  );
}

export default Ex03useRefDOM;