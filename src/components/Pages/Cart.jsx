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
        <button onClick={handleLogout}>
        Logout
        </button>
    </div>
  )
}

export default Cart