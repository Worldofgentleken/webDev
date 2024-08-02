import logo from './logo.svg';
import './App.css';
import Ex01Counter from './ex04-state/Ex01Counter';
import Ex03BadCounter from './ex04-state/Ex03BadCounter';
import Ex02LikeButton from './ex04-state/Ex02LikeButton';

function App() {
  return (
    <div className="App">
      <Ex01Counter />
      <Ex02LikeButton />
      <Ex03BadCounter />
    </div>
  );
}

export default App;
