import { Button } from "@mui/material";
import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate= useNavigate()
 function handleLogout(){
        localStorage.clear()
       navigate("/",{replace:true})
    }
  return (
    <div>Cart
        <Button onClick={handleLogout}>
         Logout
        </Button>
    </div>
  )
}

export default Cart