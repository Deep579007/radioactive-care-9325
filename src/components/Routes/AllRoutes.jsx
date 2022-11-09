import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../home/Homepage'
import Main from "../Cart/Main";
import Brush from "../brush/Brush"
import Desc from "../Decription/desc"
import { ChakraProvider } from '@chakra-ui/react'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/brush' element={<Brush/>}/>
        <Route path='/cart' element={<ChakraProvider><Main/></ChakraProvider>}/>
        <Route path='/brush:id' element={<ChakraProvider><Desc/></ChakraProvider>}/>
    </Routes>
  )
}

export default AllRoutes