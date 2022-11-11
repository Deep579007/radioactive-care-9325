import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../home/Homepage'
import Main from "../Cart/Main";
import Brush from "../brush/Brush"
import Desc from "../Decription/desc"
import Done from "../Payment/Done"
import { ChakraProvider } from '@chakra-ui/react'
import Makeup from '../makeup/Makeup';
import Skin from '../skincare/Skin';
import Mdec from '../MakeupDescription/Mdec';
import Sdec from '../SkinDescription/Sdec';
// import Makeup from '../Makeup/Makeup';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/brush' element={<Brush/>}/>
        <Route path='/makeup' element={<Makeup/>}/>
        <Route path='/skincare' element={<Skin/>}/>
        <Route path='/cart' element={<ChakraProvider><Main/></ChakraProvider>}/>
        <Route path='/brush:id' element={<ChakraProvider><Desc/></ChakraProvider>}/>
        <Route path="/makeup:id" element={<ChakraProvider><Mdec/></ChakraProvider>}/>
        <Route path="/skincare:id" element={<ChakraProvider><Sdec/></ChakraProvider>}/>
        <Route path='/payment' element={<ChakraProvider><Done/></ChakraProvider>}/>
    </Routes>
  )
}

export default AllRoutes