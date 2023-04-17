import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Mission from "./components/mission";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/mission" element={<Mission />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
