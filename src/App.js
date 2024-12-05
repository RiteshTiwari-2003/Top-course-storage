/* eslint-disable react/jsx-no-undef */
import React,{useState,useEffect} from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";

const App = () => {
  const [course,setCourses]=useState(null);
  async function fetchData(){
    try{
      let response=await fetch(apiUrl);
      let output=response.json();
      setCourses(output);

    }
    catch(error){
      // eslint-disable-next-line no-undef
      toast.error("Network me koi dikkat hai");

    }
  }
  
  
  // eslint-disable-next-line react/jsx-no-undef
  return (<div>
    <div><Navbar/></div>
    <div><Filter filterData={filterData}/></div>
    <div><Cards/></div>
  </div>);
};

export default App;
