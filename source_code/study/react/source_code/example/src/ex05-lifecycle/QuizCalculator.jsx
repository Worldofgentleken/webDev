import { useState } from "react";

function QuizCalculator() {
    const [result, setResult] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleNum1Change = (event) => {
        setNum1(parseFloat(event.target.value));
    }
    const handleNum2Change = (event) => {
        setNum2(parseFloat(event.target.value));
    }
    const handleAdd = () => {
        setResult(num1 + num2);
    }

    return (
        <div> 
            <h1> 간단한 계산기 </h1>
            <input type="number" value={num1} onChange={handleNum1Change} />
            <input type="number" value={num2} onChange={handleNum2Change} />
            <div>
                <button onClick={handleAdd}>+</button>
                <button>-</button>
                <button>/</button>
                <button>*</button>
            </div>
            <div>
                <h2>결과: {result}</h2>
            </div>
        </div>
    );
}

export default QuizCalculator;
