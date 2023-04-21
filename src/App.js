import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './pages/Missions';
import Myprofile from './pages/Myprofile';
import Rockets from './pages/Rocket';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Myprofile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
