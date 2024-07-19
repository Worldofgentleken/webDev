import logo from './logo.svg';
import './App.css';
import Ex01Lifecycle from './ex05-lifecycle/Ex01Lifecycle';
import Ex02Lifecycle from './ex05-lifecycle/Ex02Lifecycle';
import Ex02ParentComponent from './ex05-lifecycle/Ex02ParentComponent';
import Ex03ParentComponent from './ex05-lifecycle/Ex03ParentComponent';
import QuizCalculator from './ex05-lifecycle/QuizCalculator1';
import Calculator from './ex05-lifecycle/Quiz01Calculator';
import Ex03Lifecycle from './ex05-lifecycle/Ex03Lifecycle';
import Ex01Counter from './ex04-state/Ex01Counter';
import Ex02LikeButton from './ex04-state/Ex02LikeButton';
import Ex03BadCounter from './ex04-state/Ex03BadCounter';
import Ex03Counter from './ex04-state/Ex03Counter';

function App() {
  return (
    <div className="App">
      {/* <Ex01Lifecycle /> */}
      {/* <Ex02Lifecycle /> */}
      {/* <Ex02ParentComponent /> */}
      <Ex01Counter />
      <Ex02LikeButton />
      <Ex03BadCounter />
      <Ex03Counter />
    </div>
  );
}

export default App;
