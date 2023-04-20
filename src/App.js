import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/rockets" replace />}
          />
          <Route
            path="/rockets"
            element={<Rocket />}
            exact
          />
          <Route
            path="/missions"
            element={<Mission />}
            exact
          />
          <Route
            path="/profile"
            element={<Profile />}
            exact
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
