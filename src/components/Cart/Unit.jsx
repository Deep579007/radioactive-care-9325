import React from "react";
import './cart.css'
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";
// import { useNavigate } from 'react-router-dom'


const Unit=({data,updateCartItem,handleDelete})=>{

   
    
      return (
        <Flex className="cartUnit"
          boxSizing="border-box"
          p="20px"
          pl="0"
          justifyContent="space-between"
          gap='20px'
          alignItems="center"
          borderTop=".4px solid black"
        >
          <Image height="140px" src={data.image}></Image>
          <VStack  gap={8}>
            <Text>{data.title}</Text>
            <Button
              onClick={() => handleDelete(data.id)}
              colorScheme="red"
              variant="outline"
            >
              Remove
            </Button>
          </VStack>
          <Flex flexDirection='column'  >
          <Text textAlign='center' >Price</Text>
          <Text>₹{data.price}</Text>
          </Flex>
          <Box
            display="flex"
            justifyContent="space-between"
            borderRadius="8px"
            size="md"
            height="44px"
            width="140px"
            border="2px"
            borderColor="green.500"
          >
            <Button
              onClick={() => {
                if(data.qnty>0){
                    updateCartItem(data.id, data.qnty, -1);
                }
              }}
              fontSize="1.5rem"
            >
              -
            </Button>
            <Center>{data.qnty+1}</Center>
            <Button
              onClick={() => {
                if(data.qnty<9){
                    updateCartItem(data.id, data.qnty, 1)
                }
              }}
            >
              +
            </Button>
          </Box>
          <Center boxSizing="border-box" w='80px'>
          <Flex flexDir='column'>
           <Text textAlign='center' fontWeight='500'>Total</Text> 
          <Text  fontWeight="600"> ₹{((data.price)*(data.qnty+1)).toFixed(2)}</Text> 
          </Flex>
          </Center>
        </Flex>
      );
    
}
export default Unit