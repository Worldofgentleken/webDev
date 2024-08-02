import logo from './logo.svg';
import './App.css';
import Ex01useState from './ex06-hooks/Ex01useState';
import Ex02useEffect from './ex06-hooks/Ex02useEffect';
import Ex03useRef from './ex06-hooks/Ex03useRefVariable';
import Ex03useRefDOM from './ex06-hooks/Ex03useRefDOM';
import Ex04useContextParent from './ex06-hooks/Ex04useContextParent';

function App() {
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      {/* <Ex01useState/> */}
      {/* <Ex02useEffect /> */}
      {/* <Ex03useRef /> */}
      {/* <Ex03useRefDOM /> */}
      <Ex04useContextParent />
    </div>
  );
}

export default App;
