import logo from './logo.svg';
import './App.css';
import Ex01Hello from './ex03-props/Ex01Hello';
import Ex02UserApp from './ex03-props/Ex02UserApp';
import Ex03UserTableApp from './ex03-props/Ex03UserTableApp';
import Practice01Comment from './ex03-props/Practice01Comment';
import Practice01CommentApp from './ex03-props/Practice01CommentApp';

function App() {
  return (
    <div className="App">
      <Ex01Hello name="John"/>
      <Ex02UserApp />
      <hr></hr>
      <Ex03UserTableApp />
      <hr></hr>
      <Practice01CommentApp />
    </div>
  );
}

export default App;
