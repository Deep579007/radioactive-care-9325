import "./Brush.css";
import React from "react";
import { Button } from "@mui/material";
import {Link,useNavigate} from 'react-router-dom'


const BrushCard = ({ image, title, price, rating, id }) => {
const Navigate= useNavigate()





  return (
    
    <div className="boxB">
      <Link to={`/brush/${id}`}  style={{ textDecoration: 'none' }}>
      <img src={image} alt={title} />
      <h3 style={{fontSize:"1.2rem"}} >{title}</h3>
      <p>Rs. {price}</p>
      <p>
        <img id="star" src="https://in.sugarcosmetics.com/star_filled.png" alt="star"/>{" "}
        {rating}
      </p>
      </Link>
      <div style={{ height: "2.8rem",justifyContent:"space-between", display: "flex",marginBottom:"0.9rem" }}>
        <Button  onClick={()=>Navigate(`/brush/${id}`)} style={{height:"100%",width:"100%",fontWeight:"600",fontSize:"0.7rem"}} variant="contained" id="cartbutton">Add To Cart</Button>
      </div>
    </div>
    
  );
};
export default BrushCard;
