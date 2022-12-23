import React from "react";
import { Box, Center, Grid, Spinner, Text } from "@chakra-ui/react";
import Unit from "./unit";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Wish() {
  const[data,setData]=useState([])
  const[number,setNum]=useState(1)
  const Navigate = useNavigate()
  const[isLoading,setLoading]=useState(true)

  useEffect(() => {

    axios.get("https://render-mock-server.onrender.com/wish").then((res)=>{
      setData(res.data)})
    setLoading(false)
  }, [number]);

  const deleteWishItem=(lid)=>{
    axios.delete(`https://render-mock-server.onrender.com/wish/${lid}`)
    .then(()=>setNum(number-1))
    .catch(err=>{
        console.log("error",err)
    })
  }
  function handleCart(lid) {
    axios.get(`https://render-mock-server.onrender.com/${lid.cat}/${lid.id}`).then((res)=>{
      // console.log(res.data)
      axios.post("https://render-mock-server.onrender.com/cart", res.data)
      .then(res => {
          // console.log(res)
      })
      .catch(err => {
          // console.log("err")
      })
  }
  )

    setTimeout(() => {
        Navigate('/cart')
    }, 1000);
}

  const arr = data.map((item) => {
    return <Unit key={item.id} obj={item}  deleteWishItem={ deleteWishItem} handleCart={handleCart}/>;
  });
  



  return (
    <Box>
      <Text textAlign="center" fontSize="2rem" fontWeight="500" my="40px">
        WishList
      </Text>
      <Center>
        {isLoading && <Spinner mb='50px' size="xl" color="red.500" />}
      </Center>
      <Center>
        {!data && <Text fontSize='1.2rem '>Error in loading wishlist</Text>}
      </Center>
      <Grid
        display={{base:'flex',md:'flex',lg:'grid'}}
        flexDirection={{base:'column'}}
        alignItems={{base:'flex-start',md:'center'}}
        gridTemplateColumns="repeat(2,1fr)"
        gap="60px"
        bg={{
            base:'#edf3f8',
          
        }}
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
      >
        {arr}
      </Grid>
    </Box>
  );
}

export default Wish;
