import React, { useState } from "react";
import Quiz01CalculatorDisp from "./Quiz01CalculatorDisp";
import ButtonPanel from "./Quiz01ButtonPanel";
import "./Calculator.css"

function Calculator() {
  const [displayValue, setDisplayValue] = useState(""); // 디스플레이 관리
  const [operator, setOperator] = useState(null); // 연산자 관리
  const [firstValue, setFirstValue] = useState(null); // 첫 번째 피연산자 관리

  const btnClick = (buttonName) => {   // 버튼 클릭 함수
    if (!isNaN(buttonName)) { 
      // 숫자 버튼을 클릭한 경우
      setDisplayValue(displayValue + buttonName);  // 디스플레이 값에 숫자 추가
    } else if (buttonName === "C") {
      // Clear 버튼을 클릭한 경우
      setDisplayValue(""); // 디스플레이 값 초기화
      setOperator(null); // 연산자 초기화
      setFirstValue(null); // 첫 번째 피연산자 초기화
    } else if (buttonName === "=") {
      // "=" 버튼을 클릭한 경우
      if (operator && firstValue != null) { // 연산자 + 첫 번째 피연한자 있는 경우
        const secondValue = parseFloat(displayValue); // 두 번째 피연산자를 디스플레이 값으로 설정
        const result = calculate(firstValue, secondValue, operator); 
        setDisplayValue(String(result)); // 결과 디스플레이 값으로 설정
        setFirstValue(null);
        setOperator(null);
      }
    } else {
      // 연산자 버튼을 클릭한 경우
      setOperator(buttonName); // 연산자 설정
      setFirstValue(parseFloat(displayValue));
      setDisplayValue("");
    }
  };

  const calculate = (firstValue, secondValue, operator) => { // 연산 수행 함수
    switch (operator) { // 4칙연산
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <div className="calculator">
      <Quiz01CalculatorDisp value={displayValue} />
      <ButtonPanel handleClick={btnClick} />
    </div>
  );
}

export default Calculator;
