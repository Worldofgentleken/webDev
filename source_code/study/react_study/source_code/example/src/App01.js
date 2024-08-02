import logo from './logo.svg';
import './App.css';
import Ex01Hello from './ex01-jsx/Ex01Hello';
import Ex02Hello from './ex01-jsx/Ex02Hello';
import Ex03Hello from './ex01-jsx/Ex03Hello';
import Ex04Hello from './ex01-jsx/Ex04Hello';

function App() {
  return (
    <div className="App">
      <h1>나왔지롱~</h1>
      <Ex01Hello who='이순신'/>
      <Ex02Hello who='홍길동'/>
      <Ex03Hello who='후후후'/>
      <Ex04Hello who='루루룩'/>
    </div>
  );
}

export default App;
