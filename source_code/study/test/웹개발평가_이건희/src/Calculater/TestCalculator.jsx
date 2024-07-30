import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/calculate', { expression: input });
      setResult([...result, { expression: input, value: response.data.result }]);
      setInput('');
    } catch (error) {
      console.error('Invalid input:', error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get('/calculate');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  return (
    <div>
      <h1>두 수 계산기</h1>
      <form onSubmit={handleSubmit}>
        <label>식 입력: </label>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">=</button>
      </form>
      <h2>계산 기록</h2>
      <button onClick={fetchHistory}>가져오기</button>
      <table>
        <thead>
          <tr>
            <th>수식</th>
            <th>결과</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.expression}</td>
              <td>{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;