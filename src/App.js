import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage.jsx';
import Test from './components/testcomponent.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
