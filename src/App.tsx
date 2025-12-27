import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lng" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<Details />} />
          </Route>

          <Route path="services">
            <Route index element={<Services />} />
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
