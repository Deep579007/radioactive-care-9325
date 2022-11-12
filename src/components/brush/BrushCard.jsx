import "./Brush.css";
import React from "react";
import { Button, Checkbox, Box } from "@mui/material";
import { red,grey } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {Link,useNavigate} from 'react-router-dom'

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const BrushCard = ({ image, title, price, rating, id }) => {
const Navigate= useNavigate()




  return (
    
    <div className="box">
      <Link to={`/brush${id}`}  style={{ textDecoration: 'none' }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Rs. {price}</p>
      <p>
        <img id="star" src="https://in.sugarcosmetics.com/star_filled.png" alt="star"/>{" "}
        {rating}
      </p>
      </Link>
      <div style={{ height: "40px",justifyContent:"space-between", display: "flex",marginBottom:"10px" }}>
      <Box component="span" sx={{ p:0, border: '1px solid black',borderRadius:"5px",marginLeft:"5px" }}>
        <Checkbox 
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          sx={{ color: grey[800], "&.Mui-checked": { color: red[600] } }}
        />
        </Box>
        <Button  onClick={()=>Navigate(`/brush${id}`)} style={{height:"100%",width:"75%",fontWeight:"600"}} variant="contained" id="cartbutton">Add To Cart</Button>
      </div>
    </div>
    
  );
};
export default BrushCard;
