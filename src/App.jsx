import "./App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import TvSingle from "./pages/TvSingle";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shows/:id" element={<TvSingle />} />
        <Route path="shows/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
