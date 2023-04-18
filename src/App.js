import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="nav-bar">
        <Header />
      </div>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default App;
