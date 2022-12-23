import "./Skin.css";
import React from "react";
import { Button } from "@mui/material";
import {Link,useNavigate} from 'react-router-dom'

const SkinCard = ({ image, title, price, rating, id }) => {
const Navigate= useNavigate()




  return (
    
    <div className="boxS">
      <Link to={`/skincare/${id}`}  style={{ textDecoration: 'none' }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Rs. {price}</p>
      <p>
        <img id="star" src="https://in.sugarcosmetics.com/star_filled.png" alt="star"/>{" "}
        {rating}
      </p>
      </Link>
      <div style={{ height: "40px",justifyContent:"space-between", display: "flex",marginBottom:"10px" }}>
        <Button  onClick={()=>Navigate(`/skincare/${id}`)} style={{height:"100%",width:"100%",fontWeight:"600"}} variant="contained" id="cartbutton">Add To Cart</Button>
      </div>
    </div>
    
  );
};
export default SkinCard;
