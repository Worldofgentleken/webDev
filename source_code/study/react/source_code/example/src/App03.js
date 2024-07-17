import logo from './logo.svg';
import './App.css';
import Ex01Hello from './ex03-props/Ex01Hello';
import Ex02UserApp from './ex03-props/Ex02UserApp';

function App() {
  return (
    <div className="App">
      <Ex01Hello name="John"/>
      <Ex02UserApp />
    </div>
  );
}

export default App;
