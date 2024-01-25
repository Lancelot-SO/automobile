import './App.css';
import Ads from './components/Ads';
import Brand from './components/Brand';
import Browse from './components/Browse';
import Collection from './components/Collection';
import CompareCar from './components/CompareCar';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from "react-toastify"

import NavBar from './components/NavBar';
import NewCars from './components/NewCars';
import RecentCar from './components/RecentCar';
import Recommended from './components/Recommended';
import TopRated from './components/TopRated';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Browse />
      <Brand />
      <Collection />
      <RecentCar />
      <Ads />
      <NewCars />
      <Recommended />
      <TopRated />
      <CompareCar />

    </div>
  );
}

export default App;
