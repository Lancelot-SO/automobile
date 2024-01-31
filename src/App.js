import "./App.css";

// import Home from './components/Home';
import Landing from "./Pages/Landing";
import Details from './Pages/Details'
import NavBar from "./components/NavBar";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import AboutUs from './Pages/AboutUs'
import CustomerReview from './Pages/CustomerReview'
import ReturnExchange from './Pages/ReturnExchange'
import AuctionDetails from './Pages/Auction'
import Compare from './Pages/Compare'

function App() {
  return (
    <div className="App">
         <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/customer-review" element={<CustomerReview />} />
          <Route path="/return-exchange" element={<ReturnExchange />} />
          <Route path="/auction-details" element={<AuctionDetails />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Router>
      {/* <Landing /> */}
      <Footer />
    </div>
  );
}

export default App;
