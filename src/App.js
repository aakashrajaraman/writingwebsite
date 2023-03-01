import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage';
import Navbar from "./components/testcomponent";
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
