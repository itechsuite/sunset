import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './Pages/About';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/Footer/Footer';
import Eko from './Pages/Eko'
import Terms from './Pages/Terms'
import { ContactUs } from './Pages/ContactUs';
import Career from './Pages/Career';
import PartnershipScheme from './Pages/PartnershipScheme';
import AboutUs from './Pages/AboutUs';
import HotDeals from './Pages/HotDeals';
function App() {
  return (
    <Router>
      <NavComponent />
      <Routes >
      <Route path="/" exact element={< Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/property/eko"  element={<Eko />} />
      <Route path="/terms"  element={<Terms />} />
      <Route path="/contact-us"  element={<ContactUs />} />
      <Route path="/career"  element={<Career />} />
      <Route path="/client-partnership-scheme" element={<PartnershipScheme />} />
      <Route path="/about-us"  element={<AboutUs />} />
      <Route path="/hot-deals"  element={<HotDeals />} />

      </Routes>
      <FooterComponent />
    </Router>

  );
}

export default App;
