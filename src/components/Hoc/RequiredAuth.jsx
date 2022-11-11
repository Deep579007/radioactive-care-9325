import React from 'react'
import { Navigate } from 'react-router-dom'

const RequiredAuth = ({children}) => {
     const mobile=localStorage.getItem("Mobile")
     const Otp=localStorage.getItem("otp")
     if(mobile && Otp){
        return children
     }else{
        return (
            <Navigate to="/"></Navigate>
            )
    }
}

export default RequiredAuth
