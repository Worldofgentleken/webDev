import logo from './logo.svg';
import './App.css';
import ParentComponent from './ex02-elements/ParentComponent';
import Tick from './ex02-elements/Tick';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <hr></hr>
      <Tick />
    </div>
  );
}

export default App;
