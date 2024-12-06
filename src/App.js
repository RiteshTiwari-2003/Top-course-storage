/* eslint-disable react/jsx-no-undef */
import React,{useState,useEffect} from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  async function fetchData(){
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=response.json();
      setCourses(output.data);

    }
    catch(error){
      // eslint-disable-next-line no-undef
      toast.error("Network me koi dikkat hai");

    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  
  
  // eslint-disable-next-line react/jsx-no-undef
  return (<div className="min-h-screen flex flex-col">
    <div><Navbar/></div>
    <div><Filter filterData={filterData}/></div>
    <div>{loading?(<Spinner/>):(<Cards courses={courses}/>)}</div>
  </div>);
};

export default App;
