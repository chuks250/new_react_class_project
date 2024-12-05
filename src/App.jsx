import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import Choose from "./pages/Choose";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PropPage from "./pages/PropPage";

const App = () => {
  const links = [
    { path: "./", label: "Home" },
    { path: "/our-services", label: "Our Services" },
    { path: "/choose", label: "Choose" },
    { path: "/contact", label: "Contact" },
    { path: "/props", label: "Props" },
  ];

  return (
    <Router>
      <NavBar
        logoText="Trade center"
        buttonText="Get A Quote"
        links={links}
        buttonStyle={"bg-red-700 rounded-full px-8 py-3"}
        buttonAction={(evt) => {
          evt.preventDefault();
          console.log("I have been clicked");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/props" element={<PropPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
