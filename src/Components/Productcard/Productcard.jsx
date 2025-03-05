import { Box,Badge, Image, WrapItem,Button, Text, } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons";
import { useState,useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
const Productcard=({property})=>{
  //console.log(property.rating)
    return(
      <>
        <WrapItem>
        <Box maxW='sm'  paddingTop="25px"border='1px solid #b2b3b1' borderRadius='5px' overflow='hidden' margin="0.3em"  height="16em" width="11em" backgroundColor="white" alignItems="flex-start">
        <Image src={property.image} paddingLeft="40px"alt="No Image" width="90%" marginBottom="15px"/>
        <Box display='flex' mt='2' alignItems='center' paddingLeft="10px">
            {
            Array(5)
              .fill('')
              .map((_,i) => (
                <StarIcon
                  stroke="#99999A"
                  strokeWidth="1px"
                  key={i}
                  color={i < property.rating ? '#D88410' : 'white'}
                  boxSize="12px" 
                  marginLeft="3px"
                />
              ))}
          </Box>
  
        <Box p='6'>
          <Box
            mt='1'
            fontWeight="450"
            lineHeight='tight'
            noOfLines={2}
            marginBottom="15px"
            fontSize="14px"
            paddingLeft="10px"
          >
            {property.name}
          </Box>
          <Box color="#408AD3" fontWeight="700" fontSize="14px" paddingLeft="10px">
            $ {property.price}
          </Box>
  
        </Box>
      </Box>
      </WrapItem>
      </>
    )
}
export default Productcard