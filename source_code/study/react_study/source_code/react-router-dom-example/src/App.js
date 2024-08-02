import logo from './logo.svg';
import './App.css';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}
function App(){
  return(
    <div>
      <h1>Hello React Router DOM</h1>
    <Home></Home>
    <Topics></Topics>
    <Contact></Contact>
    </div>
  );
}

export default App;
