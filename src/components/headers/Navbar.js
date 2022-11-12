import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DiscountIcon from "@mui/icons-material/Discount";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate();
   
    // const logout=()=>{
       

            const mobile=localStorage.getItem("Mobile")
            const Otp=localStorage.getItem("otp")
            // if(mobile && Otp){
            //    setState(!state);
            //    console.log(state)
            // }
        
    //    }
       function handleLogout(){
        localStorage.clear()
       navigate("/",{replace:true})
    }
  
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <a href="/">

            <img   src="./CosmoStore.png" alt="" />
            </a>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              name=""
              id="intext"
              placeholder='Try"Liquid Lipstick'
            />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {
                mobile && Otp ? <button className="logout" onClick={handleLogout}>Logout</button> : <a href="/login">Login/Register</a>
            }
            
          </div>
          <div className="cart_btn">
            <Badge color="primary" >
              <FavoriteBorderIcon style={{color:"white"}}/>
            </Badge>
          </div>
          <div className="cart_btn">
            <Badge color="primary">
              <a href="/cart">
                <LocalMallIcon style={{color:"white"}}/>
              </a>
            </Badge>
          </div>
          <div className="cart_btn">
            <Badge color="primary">
              <DiscountIcon style={{color:"white"}}/>
            </Badge>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
