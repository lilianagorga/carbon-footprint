import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Countries from './components/Countries';
import Average from './components/Average';
import Geo from './components/Geo';

function App() {
  return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/countries" element={<Countries />} />
          <Route exact path="/average" element={<Average />} />
          <Route exact path="/geo" element={<Geo />} />
        </Routes>
      </div>
  );
}

export default App;
