import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
    return (
        <footer>
            <div className='footer_container' style={{ border: "1px solid black", height: "700px", backgroundColor: "black" }}>
                {/* <div style={{border:"1px solid black",height:"200px"}}>
        <p>READ MORE ABOUT SUGAR COSMETICS</p>
        <h2 style={{textAlign:"center"}}>LET'S STAY IN TOUCH</h2>
        <p style={{textAlign:"center"}}>Get the latest beauty tips straight to your inbox. Cant wait to connect!</p>
        <div>
            <input style={{margin:"auto",display:"block"}} type="text" placeholder="Enter Email"></input>
            <button style={{margin:"auto",display:"block"}}>SUBSCRIBE</button>
        </div>
    </div> */}
                <div style={{ width: "100%" }}>
                    <img style={{ marginLeft: "580px" }} src='./CosmoStore.png' alt='' />
                    <Divider />
                    <div style={{ marginLeft: "680px" }}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                        <InstagramIcon />
                        <EmailIcon />
                        <PinterestIcon />
                    </div>
                    <Divider style={{
                        backgroundColor: "white"
                    }} />
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <h3>Store</h3>
                        <h3>Terms & Conditions</h3>
                        <h3>Returns</h3>
                        <h3>FAQs</h3>
                        <h3>About Us</h3>
                    </div>
                    <Divider style={{
                        backgroundColor: "white"
                    }} />
                    <h2 style={{marginLeft:"100px"}}>GET IN TOUCH</h2>
                    <div className='footer_container'>
                        <div className='footr_details_one'>
                            <h3>Call us at</h3>
                            <p>1800-209-9933</p>
                            <p>Monday to Friday : 9 AM to 7 PM</p>
                        </div>
                        <div className='footr_details_one'>
                            <h3>Support</h3>
                            <p>hello@sugarcosmetics.com</p>

                        </div>
                        <div className='footr_details_one'>
                            <h3>Careers</h3>
                            <p>We're hiring!</p>

                        </div>
                        <div className='footr_details_one'>
                            <h3>Press & Media</h3>
                            <p>pr@sugarcosmetics.com</p>

                        </div>
                        <div className='footr_details_one'>
                            <h3>Influencer Collab</h3>
                            <p>Join Us</p>

                        </div>

                    </div>
                    <Divider style={{
                        backgroundColor: "white",
                        marginTop: "40px"
                    }} />
                    <div>
                        <h3 style={{ marginLeft: "400px",marginTop:"50px" }}>GET THE NEW SUGAR APP TODAY!</h3>
                        <p style={{ marginLeft: "400px" }}>Tap into a better shopping experience.</p>
                        
                    </div>
                    <div style={{marginTop:"-25px"}}>
                    <img style={{ marginLeft: "730px",width:"15%",marginTop:"-100px" }} src='https://in.sugarcosmetics.com/playstore.png' alt=''/>
                    </div>
                    <Divider style={{
                        backgroundColor: "white",
                        marginTop: "40px"
                    }} />
                    <p style={{textAlign:"center"}}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
                </div>


            </div>
        </footer >


    )
}

export default Footer