import React from "react";
import { Box, Flex, HStack, chakra, Image,  Button } from "@chakra-ui/react";

function Unit({obj, deleteWishItem,handleCart}) {


    

  return (
    <Box>
      
    <Flex
      maxW="md"
      mx="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Box w={1 / 3} minW='120px'>
        <Image src={obj.image} />
      </Box>

      <Box
        w={2 / 3}
        p={{
          base: 4,
          md: 4,
        }}
      >
        <chakra.h1
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "white",
          }}
        >
          {obj.title}
        </chakra.h1>

        <chakra.p
          mt={2}
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          Sugar Cosmetics
        </chakra.p>

        <HStack spacing={1} display="flex" alignItems="center" mt={2}>
          
        </HStack>

        <Flex mt={3} alignItems="center" justifyContent="space-between">
          <chakra.h1 color="grey" fontWeight="bold" fontSize="lg">
          ₹{obj.price}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            onClick={()=> deleteWishItem(obj.id)}
            bg="white"
            fontSize=".9rem"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "red.200",
            }}
            _active={{
              bg: "red.500",
            }}
          >
            Remove
          </chakra.button>
          <chakra.button
            px={2}
            py={1}
            onClick={()=>handleCart(obj)}
            bg="white"
            fontSize=".9rem"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "green.200",
            }}
            _active={{
              bg: "green.500",
            }}
          >
            Add to Cart
          </chakra.button>
         
        </Flex>
      </Box>
    </Flex>
</Box>
  )
}

export default Unit;

