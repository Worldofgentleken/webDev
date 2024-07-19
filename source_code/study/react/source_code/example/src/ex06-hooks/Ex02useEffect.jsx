/*
함수 컴포넌트에서 부작용(side-effect)을 처리
네트워크 요청(fetch), 수동 DOM 조작 등에 사용

	componentDidMount()
	componentDidUpdate()
  componentWillUnmount()

  위 세 가지 라이프사이클 함수를 합친 개념

  useEffect(setUp, dependencies);

의존성 배열: 
	useEffect의 두 번째 인자인 빈 배열 []은 
  이 훅이 컴포넌트가 처음 마운트될 때와 언마운트될 때만 실행됨을 의미
	의존성 배열을 생략하면 컴포넌트 업데이트 시 마다 실행
	useEffect()에 전달하는 이펙트 함수가 return하는 함수를 지정할 경우 컴포넌트가 마운트 해제 되지 직전에 실행(componentWillUnmount()와 같음)


*/
import { useEffect, useState } from 'react';

function Ex02useEffect(){
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  console.log('컴포넌트 렌더링 함수 호출');

  useEffect(()=>{ 
    console.log('부작용');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log('외부 요청 결과 응답으로 data를 변경');
        setTimeout(() => {
          setData(data);
          console.log('data 상태 변경 완료');
        }, 3000);
      });
      return () => {
        console.log('컴포넌트가 언마운트 될 때 동작');
      }
  }, [count]);

  return (
    <div>
      <h1>useEffect Example</h1>
      {data ? <p>제목:{data.title}</p> : <p>Loading...</p>}
      <button type="button" onClick={() => setCount(count+1)}>
        증가
      </button>
    </div>
  );
}

export default Ex02useEffect;