import "./App.css";

// import Home from './components/Home';
import Landing from "./Pages/Landing";
import Details from './Pages/Details'
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import AboutUs from './Pages/AboutUs'

function App() {
  return (
    <div className="App">
         <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      {/* <Landing /> */}
      <Footer />
    </div>
  );
}

export default App;
