import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MyGarden from './pages/MyGarden';

export default function App() {
  return (
      <Router>
        {/* Vihreä Bootstrap-navigaatiopalkki */}
        <nav className="navbar navbar-expand navbar-dark bg-success shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">🌿 Vihreää iloa</Link>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link text-white px-3 fw-semibold" to="/">Koti</Link>
              <Link className="nav-link text-white px-3 fw-semibold" to="/haku">Haku</Link>
              <Link className="nav-link text-white px-3 fw-semibold" to="/oma-puutarha">Oma Puutarha</Link>
            </div>
          </div>
        </nav>

        {/* Sivun sisältö vaihtuu tässä reitin mukaan */}
        <div className="py-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/haku" element={<Search />} />
            <Route path="/oma-puutarha" element={<MyGarden />} />
          </Routes>
        </div>
      </Router>
  );
}
