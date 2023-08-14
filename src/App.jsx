import "./App.css";
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
      </Routes>
    </Router>
  );
}

export default App;
