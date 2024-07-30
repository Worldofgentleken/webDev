import logo from './logo.svg';
import './App.css';
import Ex01onClick from './ex07-event/Ex01onClick';
import Ex02onFocus from './ex07-event/Ex02onFocus';
import Ex03onMouse from './ex07-event/Ex03onMouse';
import Ex04onKey from './ex07-event/Ex04onKey';
import Ex05onChange from './ex07-event/Ex05onChange';
import Ex06onSubmit from './ex07-event/Ex06onSubmit';
import QuizCalculator from './ex05-lifecycle/QuizCalculator';
import Ex03UserTableApp from './ex03-props/Ex03UserTableApp';
import Ex03UserTable from './ex03-props/Ex03UserTable';
import Calculator from './test/TestCalculator.jsx';

function App() {
  return (
    <div className="App">
      {/* <Ex01onClick /> */}
      {/* <Ex02onFocus /> */}
      {/* <Ex03onMouse /> */}
      {/* <Ex04onKey /> */}
      {/* <Ex05onChange /> */}
      <Calculator />
    </div>
  );
}

export default App;
