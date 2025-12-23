import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ServiceInfo from "./pages/ServiceInfo";
import ScrollToTop from "./components/ScrollToTop";
import AppLayout from "./components/AppLayout";

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
          <Route path="projects" element={<Projects />} />

          <Route path="services">
            <Route index element={<Services />} />
            <Route path=":id" element={<ServiceInfo />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
