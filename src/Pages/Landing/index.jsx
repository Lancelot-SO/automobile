import React from "react";
import NavBar from "../../components/NavBar";
import Ads from "../../components/Ads";
import Brand from "../../components/Brand";
import Browse from "../../components/Browse";
import Collection from "../../components/Collection";
import CompareCar from "../../components/CompareCar";
import Home from "../../components/Home";

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from "react-toastify"

import NewCars from "../../components/NewCars";
import RecentCar from "../../components/RecentCar";
import Recommended from "../../components/Recommended";
import TopRated from "../../components/TopRated";

function index() {
  return (
    <>
   
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
    </>
  );
}

export default index;
