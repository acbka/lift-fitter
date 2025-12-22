import { BrowserRouter as Router, Routes, Route } from "react-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ServiceInfo from "./pages/ServiceInfo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
