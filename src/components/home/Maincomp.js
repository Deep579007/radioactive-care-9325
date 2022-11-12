import React from 'react'
import Banner from './Banner'
import "./home.css";
import Slide from './Slide';
import Slide2 from './Slide2';
import Singlebanner from './singelbanner';
import {Singlebanner2} from './singelbanner';
import Footer from '../Footer/Footer';
const Maincomp = () => {
  return (
    <>
    <div className='home_section'>
      <div className='banner_part'>
        <Banner />
      </div>
      
      <Slide />
      
      <h2 style={{textAlign:"center"}}>HOT DEALS</h2>
    </div>
    
    <div className='center_img'>
        
         <img style={{width:"450px",borderRadius:"20px"}} src='https://d32baadbbpueqt.cloudfront.net/Homepage/d9560110-40f7-4d14-a98d-5599b45a84ef.jpg' alt=''/>
         <img style={{width:"450px",borderRadius:"20px"}} src='https://d32baadbbpueqt.cloudfront.net/Homepage/d5b0ca8f-cc40-4f07-b7d4-25aadde11fd1.jpg' alt=''/>
         <img style={{width:"450px",borderRadius:"20px"}} src='https://d32baadbbpueqt.cloudfront.net/Homepage/fb82e32a-164e-432a-af89-b6593001d384.jpg' alt=''/>
      </div>
      <div>
      <Slide2 />
      <Singlebanner/>
      <h2 style={{textAlign:"center"}}>TOP PICKS OF THE WEEK</h2>
      <div className='center_img'>
        
         <img style={{width:"450px",borderRadius:"20px"}} src='https://d32baadbbpueqt.cloudfront.net/Homepage/fd062254-fcc7-432d-94dc-9d7da4a6fc62.gif' alt=''/>
         <img style={{width:"450px",borderRadius:"20px"}} src='https://d32baadbbpueqt.cloudfront.net/Homepage/9f9d2095-f019-4bb5-b961-db87fab439f6.jpg' alt=''/>
         <img style={{width:"450px",borderRadius:"20px"}} src='https://d32baadbbpueqt.cloudfront.net/Homepage/c325cb7a-0c27-454d-a631-1e184b071e55.jpg' alt=''/>
      </div>
      <Singlebanner2/>
      <Footer/>
      </div>
    </>
  )
}

export default Maincomp