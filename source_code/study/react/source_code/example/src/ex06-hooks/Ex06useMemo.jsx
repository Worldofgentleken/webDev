/*
계산 비용이 높은 함수의 결과를 메모이제이션에 사용
값이 불필요하게 재계산되는 것을 방지

const cachedValue = useMeno(calculateValue, dependencies?)
  calculateValue: 계산 비용이 많이 드는 함수
  dependencies: 다시 계산하기 위한 값을 지정하는 의존성 변수
*/
import React, { useMemo } from 'react';

function Ex06useMemo({ a, b }){
    const calculateSum = (a, b) => {
        console.log('계산 진행...');
        return a + b;
    };

    // 저장
    const sum = useMemo(() => calculateSum(a, b), [a, b]);

    console.log()

    return (
        <div>
            <h3>Sum of {a} and {b}:</h3>
            <p>{sum}</p>
        </div>
    );
};

export default Ex06useMemo;
