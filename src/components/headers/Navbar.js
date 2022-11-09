import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DiscountIcon from '@mui/icons-material/Discount';
const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
            <div className='navlogo'>
                  <img src='./CosmoStore.png' alt=''/>
               </div>
               <div className='nav_searchbaar'>
                   <input type="text" name="" id="intext" placeholder='Try"Liquid Lipstick'/>
                   <div className='search_icon'>
                           <SearchIcon/>
                      </div>
                </div>
            </div>
            <div className='right'>
            <div className='nav_btn'>
                    <a href='/Home'>Login/Register</a>
                    
               </div>
               <div className='cart_btn'>
               <Badge color="primary">
                   <FavoriteBorderIcon id="icon"/>
                </Badge>
                     </div>
               <div className='cart_btn'>
               <Badge color="primary">
                   <LocalMallIcon id="icon"/>
                </Badge>
                     </div>
                     <div className='cart_btn'>
               <Badge color="primary">
                   <DiscountIcon id="icon"/>
                </Badge>
                     </div>
               
            </div>
        </nav>
    </header>
  )
}

export default Navbar