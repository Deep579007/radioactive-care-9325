import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Center,
  } from '@chakra-ui/react'
import { MdLocalFireDepartment } from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

export default function OurModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Navigate = useNavigate()
    function lastFunc(){
      setTimeout(() => {
        onOpen()   
      }, 600);

     

    }
    return (
      <>
      <Center>
        <Button className='orderButton' ml='40px' onClick={lastFunc} fontSize='1.35rem' mt='25px' colorScheme='green' variant='solid' >Place Order</Button>
      </Center>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            
            <ModalBody style={{marginTop:"20px"}}>
              <Text>Your order is placed. You will get a confirmation email on your registerd email id.</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>{
                onClose()
                setTimeout(() => {
                  Navigate('/')
                }, 500);
              }}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  