
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage';
import Header from './components/header';
import ButtonStyles from './components/testcomponent';
import Navbar from './components/testcomponent';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element = {<Header/>}/>
    </Routes>
    </Router>
  );
}

export default App;
