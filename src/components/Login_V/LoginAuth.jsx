import React from 'react'
import { Box, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import "./Login.css";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
const LoginAuth = () => {
  const [data,setData] = useState()
    const navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        if(data==="1234"){
            localStorage.setItem("otp",data)
              navigate("/")
        }else{
          alert("Enter Correct Otp 1234")
        }

      };
  return (
    <div className="LoginCon">
      <div>
      <div className="imgBox">
        <img
          src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          width={"100%"}
          height={"645px"}
          alt=""
          className='ImageLogo'
        />
      </div>
      </div>
  <div className="inputBox">
    <div style={ { width:"50%", margin:"auto", textAlign:"center" } }>
    <div>
    <Box sx={{display:"flex", 
                        flexDirection:"row",
                        gap:"5%", 
                        fontSize:"25px",
                        }}>
                    <SmartphoneIcon sx={{width:"30px", height:"30px"}} />
                    Login/Signup Using Phone
                </Box>
    </div>
    <form onSubmit={formSubmit}>
    <Box className='otpBox' sx={{display:"flex", 
                        flexDirection:"row",
                        gap:"0px", 
                        fontSize:"25px"
                        }}>
            <Input
              type="password"
              placeholder="Enter OTP"
              onChange={(e) => setData(e.target.value)}
              className="inputB2"
              maxLength={4}
            />
            </Box>
    {/* <HStack>
  <PinInput border="1px solid red">
    <PinInputField  onChange={(e) => setOtp1(e.target.value)}/>
    <PinInputField  onChange={(e) => setOtp2(e.target.value)}/>
    <PinInputField  onChange={(e) => setOtp3(e.target.value)}/>
    <PinInputField  onChange={(e) => setOtp4(e.target.value)}/>
  </PinInput>
</HStack> */}
<Box sx={{
                        color:"#FC2779",
                        margin:"20px 5px",
                        fontSize:"15px",
                        padding:"4px 0px"

                }}>Enter the 4 digit OTP received on your phone.</Box>
       <Box>
                        <Button type="submit"
                        sx={{
                            backgroundColor:"#FC2779",
                            fontFamily: "IBM Plex Sans, sans-serif",
                            fontSize:"15px",
                            color:"#ffffff",
                            borderRadius:"0px",
                            width:"180px",
                            height:"41px",
                            "&:hover":{
                                color:"#ffffff",
                                backgroundColor:"#FDAAC9",
                            }
                            }}>
                        Verify OTP
                        </Button>
                    </Box>
    </form>
    <Box sx={{display:"flex", flexDirection:"column"}}>
                <Box sx={{
                        width:"100%",
                        fontWeight:"300",
                        margin:"15px 0px",
                        textAlign:"center",
                        fontSize:"15px",
                        padding:"0px, 0px, 0px, 0px"
                        }}>
                            Registering for this site allows you to access your order status and history. Just fill in the
                            fields below, and we'll get a new account set up for you in no time. We will only ask you
                            for information necessary to make the purchase process faster and easier.
                </Box>
                <Box sx={{
                        margin:"5px 10px",
                        display:"flex", 
                        flexDirection:"row",
                        gap:"2.5%",
                        justifyContent:"center",
                        padding:"10px 0px",
                        fontSize:"12px"
                        }}>
                        <Box><p style={{
                                display:"inline-block",
                                margin:"3px 0px",
                                }}>By Signing up or logging in, you agree to our
                        </p></Box>
                        <Box sx={{
                                margin:"4px 0px",
                                cursor:"pointer"
                                }}>
                                
                                <Link sx={{color:"#000000DE", "&:hover":{color:"blue"}}}>Terms and Conditions</Link>
                        </Box>
                </Box>
                </Box>
  </div>
</div>
</div>
);
};

export default LoginAuth
