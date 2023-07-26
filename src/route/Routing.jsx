import React from 'react';
import { BrowserRouter as BrowserRouter, Route,  Routes } from "react-router-dom";
import FlightPage from "../pages/FlightPage";
import TrainPage from "../pages/TrainPage";
import Home from "../pages/Home";
import StayPage from '../pages/Hotel';
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path='/flight' element={<FlightPage/>}/>
          <Route path='/Train' element={<TrainPage/>}/>
          <Route path='/hotel' element={<StayPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

