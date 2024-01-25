import "./App.css";

// import Home from './components/Home';
import Landing from "./Pages/Landing";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
      {/* <Landing /> */}
    </div>
  );
}

export default App;
