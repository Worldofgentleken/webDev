import logo from './logo.svg';
import './App.css';
import Ex01onClick from './ex07-event/Ex01onClick';
import Ex02onFocus from './ex07-event/Ex02onFocus';
import Ex03onMouse from './ex07-event/Ex03onMouse';
import Ex04onKey from './ex07-event/Ex04onKey';

function App() {
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <Ex01onClick />
      <Ex02onFocus />
      <Ex03onMouse />
      <Ex04onKey />
    </div>
  );
}

export default App;
