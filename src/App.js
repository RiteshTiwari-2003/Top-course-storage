/* eslint-disable react/jsx-no-undef */
import React,{useState,useEffect} from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {
  const [courses,setCourses]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourses(output.data);

      }
      catch(error){
        // eslint-disable-next-line no-undef
        toast.error("something went wrong");

      }
    }
    fetchData();

  },[]);
  // eslint-disable-next-line react/jsx-no-undef
  return (<div><Navbar/>
 
  <Filter filterData={filterData}/>
  <Cards courses={courses}/>
  </div>);
};

export default App;
