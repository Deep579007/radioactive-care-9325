import "./Makeup.css";
import React from "react";
import { Button, Checkbox, Box } from "@mui/material";
import { red,grey } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {Link,useNavigate} from 'react-router-dom'

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const MakeupCard = ({ image, title, price, rating, id }) => {
const Navigate= useNavigate()




  return (
    
    <div className="boxM">
      <Link to={`/makeup/${id}`}  style={{ textDecoration: 'none' }}>
      <img src={image} alt={title} />
      <h3 style={{fontSize:"1.2rem"}}>{title}</h3>
      <p>Rs.{price}</p>
      <p>
        <img id="star" src="https://in.sugarcosmetics.com/star_filled.png" alt="star"/>{" "}
        {rating}
      </p>
      </Link>
      <div style={{ height: "2.8rem",justifyContent:"space-between", display: "flex",marginBottom:"0.9rem" }}>
      <Box component="span" sx={{ p:0, border: '1px solid black',borderRadius:"5px",marginLeft:"0.2rem",width:"35%" }}>
        <Checkbox style={{width:"50%" , margin:"auto"}} 
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          sx={{ color: grey[800], "&.Mui-checked": { color: red[600] } }}
        />
        </Box>
        <Button  onClick={()=>Navigate(`/makeup/${id}`)} style={{height:"100%",width:"75%",fontWeight:"600",fontSize:"0.7rem"}} variant="contained" id="cartbutton">Add To Cart</Button>
      </div>
    </div>
    
  );
};
export default MakeupCard;
