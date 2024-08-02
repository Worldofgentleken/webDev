import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './component/nav';
import Home from './component/home';
import Chatbot from './component/chatbot';

function App() {
  return (
    <Router>
      <div>
        <Logo />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/chatbot' component={Chatbot} />
          <Route path='/resume' element={Resume} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
