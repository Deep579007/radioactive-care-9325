import React from 'react'
import PaymentMode from './PaymentMode'
import {Center } from '@chakra-ui/react'
import './payment.css'
import OurModal from './Modal'

function Done() {
  return (
    <>
    <Center><h1 style={{fontWeight:"bold",fontSize:"30px"}}>Payment Gateway</h1></Center>
    <PaymentMode/>
    <OurModal />
    </>
  )
}

export default Done