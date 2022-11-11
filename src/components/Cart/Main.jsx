import React from "react";
import Unit from "./Unit"
import './cart.css'
import {
  Box,
  Text,
  Flex,
  Button,
  VStack,
  Spinner
} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Main() {
  const[arr,setData]=useState([])
  const Navigate = useNavigate()
  const[number,setNum]=useState(1)
  const[isLoading,setLoading]=useState(true)
  // const[total,setTotal]=useState(0)
let total=0;
  arr.forEach(e=>{
    let tempQ = +(e.qnty)+1
    let tempP = +(e.price)
    let tempT = tempQ*tempP
   total=(total+tempT)
  })
 
  function handleDelete(lid) {
    deleteCartItem(lid);
  }
  const deleteCartItem=(lid)=>{
    axios.delete(`https://render-mock-server.onrender.com/cart/${lid}`)
    .then(()=>setNum(number-1))
    .catch(err=>{
        console.log("error",err)
    })
  }
  const updateCartItem=(lid,q,num)=>{
    axios.patch(`https://render-mock-server.onrender.com/cart/${lid}`,{
      "qnty" : q+num
  })
  .then(()=>setNum(number+1))
  .catch(err=>{
      console.log("error in patch")
  })
  }
 
  
  useEffect(() => {
    axios.get("https://render-mock-server.onrender.com/cart").then((res)=>setData(res.data))
    // console.log(arr)
  }, [number]);

  return (
    <Box>
      <Text mb="30px" textAlign="center" fontWeight='500' fontSize="xx-large">
        Shopping Cart
      </Text>
      {isLoading &&  arr.length<1 && (  <Spinner pos='relative' top='50%' left='50%' size="xl" zIndex='100' />)}
      { arr.length> 0 && <Flex gap='180px'>
      </Flex>}
      <Box mb='30px' borderBottom='.4px solid black'>
      { arr.map((item)=><Unit key={item.id} data={item} handleDelete={handleDelete} updateCartItem={updateCartItem}/>)};
      </Box>
      <VStack   spacing='15px' w='280px' m='auto' >
        <Flex justifyContent='space-between' width='100%'>
        <Text fontSize='22px' fontWeight='500'>Subtotal</Text>
        <Text fontSize='24px' fontWeight='600'>₹{(total).toFixed(2)}</Text>
        </Flex>
        <Button w='280px' onClick={()=>Navigate('/payment')} colorScheme='whatsapp'>Proceed to payment <ArrowForwardIcon boxSize='20px'/></Button>
        <Button w='280px'  onClick={()=>Navigate('/brush')} colorScheme='telegram'><ArrowBackIcon boxSize='20px' />Back to Product Page </Button>
      </VStack>
    </Box>

  );
}

export default Main;




