import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Link } "react-router-dom"
import Footer from "./shared/Footer/index.jsx";
import CtaSection from "./components/Cta-Section/index.jsx"
import Contact from "./pages/contact.jsx";
import Home from "./pages/home.jsx";

function App() {

  return (
    <div>
      <header>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link> */}
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  )
}

export default App
