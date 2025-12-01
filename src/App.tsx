import { BrowserRouter as Router, Routes, Route } from "react-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
