/*
복잡한 상태 로직을 관리하기 위한 훅
상태와 리듀서(reducer) 함수를 인자로 받아서 사용
상태와 상태 업데이트 로직 분리 가능

reducer 함수는 state와 action을 인자로 받음
switch 문을 사용하여 action.type에 따라 상태를 업데이트

const [state, dispatch] = useReducer(reducer, initialArg, init?)
  reducer: 상태 업데이트 로직을 정의하는 함수
  initialArg: 초기 상태 또는 초기 상태를 계산하는 값
  init (option): 초기 상태를 계산하기 위해 사용되는 함수

*/

import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

// 초기 상태 정의
const initialState = { count: 0 };

function Ex05useReducer() {
    // useReducer 훅 사용
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log('Ex05useReducer 렌더링');

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

export default Ex05useReducer;
