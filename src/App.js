import './App.css';
import Brand from './components/Brand';
import Browse from './components/Browse';
import Collection from './components/Collection';
import Home from './components/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from "react-toastify"

import NavBar from './components/NavBar';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Browse />
      <Brand />
      <Collection />

    </div>
  );
}

export default App;
