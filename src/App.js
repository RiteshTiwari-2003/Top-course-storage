/* eslint-disable react/jsx-no-undef */
import React,{useState,useEffect} from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {
  
  // eslint-disable-next-line react/jsx-no-undef
  return (<div>
    <div><Navbar/></div>
    <div><Filter/></div>
    <div><Cards/></div>
  </div>);
};

export default App;
