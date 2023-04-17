import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Mission from "./components/mission";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      <Routes>
          <Route path="/mission" element={<Mission />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
