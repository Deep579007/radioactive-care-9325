import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import './PaymentMode.css'


function PaymentMode() {
  return (
    <Box bg='#f4f4f9' p='20px' maxW='500px' m='auto'>
        <Text fontWeight='500' fontSize='18px'>Add Your Card</Text>
                    <p  className="tags">Card Number</p>
                    <Input maxW='400px' className="topTwo padLeft focus" type="text" required></Input>
                    <p className="tags">Name on Card</p>
                    <Input maxW='400px' className="topTwo padLeft focus" type="text" required></Input>
                    <p className="tags">Expiration Date</p>
                    <div className="three">
                    <select  required className="select1 hov1 focus">
                        <option   disabled hidden value="">Month</option>
                        <option value="">Jan</option>
                        <option value="">Feb</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                    <select required className="select1 hov1 focus">
                        <option   disabled hidden value="">Year</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                        <option value="">2024</option>
                        <option value="">2025</option>
                        <option value="">2026</option>
                        <option value="">2027</option>
                        <option value="">2028</option>
                        <option value="">2029</option>
                        <option value="">2030</option>
                        <option value="">2031</option>
                        <option value="">2032</option>
                        <option value="">2033</option>
                    </select>
                    <Input ml='20px' w='220px' required className="select1 padLeft focus" type="text" placeholder="CVV"/>
                </div>
                   
                    <Flex mb='10px' className="checky">
                          <Center>
                        <Checkbox mr='10px'></Checkbox>
                        <p className="checkbox">Save this card securely</p>
                          </Center>
                    </Flex>
    </Box>
  )
}

export default PaymentMode