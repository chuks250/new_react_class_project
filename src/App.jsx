import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import Choose from "./pages/Choose";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
