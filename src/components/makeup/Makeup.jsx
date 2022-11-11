import React,{useState,useEffect} from "react";
import axios from "axios"
import Navbar from '../headers/Navbar';
import Newnav from '../newnavbaar/Newnav.js';
import "./Makeup.css"
import BrushCard from "./MakeupCard";
import MakeupCard from "./MakeupCard";
const Makeup=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://render-mock-server.onrender.com/makeup")
        .then((res)=>setData(res.data))
    },[])
    return (
    <div>
    <Navbar/>
    <Newnav/>
    {/* Top Banner after nav starts from here */}
    <div id="banner">
       <div id="div1">
         <img id="img1" src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg" alt=""/> 
       </div>
    </div>
    {/* Top Banner after nav ends from here */}

    {/* Breadcrum after banner starts from here */}
    <div id="div2">
    <div id="left">
        <img src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg" alt="breadcrum"/> <p>/</p><p>Blend trend makeup brush</p>
    </div>
    <div id="right">
        <img src="https://in.sugarcosmetics.com/desc-images/filterIcon.png" alt="filter"/> <p>Filter</p>
        <img src="https://in.sugarcosmetics.com/desc-images/sortIcon.png" alt="sort"/> <p>Sort</p>
    </div>
    </div>
    <div id="inventory">
  <p> Makeup Brushes </p>
  <p>-</p>
  <p>{data.length} items</p>
  {/* Breadcrum after banner ends from here */}
    </div>

    {/*Product Display starts from here*/}
    <div id="container">
        {data.map((e)=><MakeupCard key={e.id} id={e.id} image={e.img} title={e.title} price={e.price} rating={e.rating}/>)}
    </div>
     {/*Product Display ends here*/}
    </div>
    )
}
export default Makeup;