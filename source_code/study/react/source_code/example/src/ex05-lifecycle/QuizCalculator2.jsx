import { useState } from 'react';
import QuizCalculatorCounter from './QuizCalculatorCounter';

function QuizCalculator2() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [count, setCount] = useState(0);
  
  const handleNum1Change = (event) => {
    console.log(event.target.value);
    setNum1(parseFloat(event.target.value));
  }

  const handleNum2Change = (event) => {
    setNum2(parseFloat(event.target.value));
  }

  const handleAdd = () => {
    setResult(num1 + num2);
    setCount(count + 1);
  }

  const handleSub = () => {
    setResult(num1 - num2);
    setCount(count + 1);
  }

  const handleMul = () => {
    setResult(num1 * num2);
    setCount(count + 1);
  }

  const handleDiv = () => {
    if(num2 !== 0){ 
      setResult(num1 / num2);
      setCount(count + 1);
    }else{
      setResult("0으로 나눌 수 없음");
    }
  }

  return (
    <div>
      <h1>간단한 계산기</h1>
      <input type="number" value={num1} onChange={handleNum1Change}/>
      <input type="number" value={num2} onChange={handleNum2Change}/>
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMul}>*</button>
        <button onClick={handleDiv}>/</button>
      </div>
      <div>
        <h2>결과: {result}</h2>
      </div>
      <QuizCalculatorCounter count={count}/>
    </div>
  );
}

export default QuizCalculator2;
