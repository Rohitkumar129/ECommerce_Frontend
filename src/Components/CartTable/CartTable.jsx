import { Text,VStack,Table, Tr,Td,Tbody,HStack,Button, Spacer } from "@chakra-ui/react"
import { useState } from "react"
import CardItem from "../CartItem/CardItem"
import { useNavigate } from "react-router-dom"
const CartTable=({cartItems,setCartItems})=>{
    const navigate=useNavigate()
    const ReturntoshopHandler=()=>{
        navigate('/products')
    }
    return(
        <VStack border="1px solid #EDEAE6" width="70%" alignItems="flex-start" marginLeft="3em" paddingBottom="1em" borderRadius="5px">
            <Text paddingBottom="0.4em" paddingTop="1em" paddingLeft="18px" fontFamily="sans-serif" fontSize="13px" fontWeight="590">Shopping Cart</Text>
                    <HStack backgroundColor="#EBEDED" width="100%" color=" #99999A" paddingLeft="18px">
                    <Text backgroundColor="#EBEDED" width="50%" paddingBottom="10px" paddingTop="10px" fontSize="12px" fontWeight="580" fontFamily="sans-serif">PRODUCTS</Text>
                    <Text backgroundColor="#EBEDED" width="13%" paddingBottom="10px" paddingTop="10px" fontSize="12px" fontWeight="580" fontFamily="sans-serif">PRICE</Text>
                    <Text backgroundColor="#EBEDED" width="25%" paddingBottom="10px" paddingTop="10px" fontSize="12px" fontWeight="580" fontFamily="sans-serif" marginRight="50px" marginLeft="50px">QUANTITY</Text>
                    <Text backgroundColor="#EBEDED"width="25%" paddingBottom="10px" paddingTop="10px" fontSize="12px" fontWeight="580" fontFamily="sans-serif">SUB-TOTAL</Text>
                    </HStack>
        {cartItems&&cartItems.map((cartItem)=>(<CardItem key={cartItem.id} item={cartItem} setCartItems={setCartItems} cartItems={cartItems}/>))}
        <HStack width="100%" borderTop="1px solid #EDEAE6" paddingTop="12px" paddingBottom="5px">
            <Button backgroundColor="white" borderRadius="2px" width="160px" height="15px" fontFamily="sans-serif" fontSize="11px" fontWeight="700" color="#41B0FB" border="1.6px solid #41B0FB" padding="13px" paddingLeft="0px"paddingRight="0px" onClick={ReturntoshopHandler} marginLeft="25px"><i class="fa-solid fa-arrow-left" style={{color:"#41B0FB", marginRight:"8px"}}></i>RETURN TO SHOP</Button>
            <Spacer/>
            <Button backgroundColor="white" borderRadius="2px" width="125px" height="15px" fontFamily="sans-serif" fontSize="11px" fontWeight="700" color="#41B0FB" border="1.6px solid #41B0FB" padding="13px" paddingLeft="0px"paddingRight="0px" marginRight="20px">UPDATE CART</Button>
        </HStack>
        </VStack>
    )
}
export default CartTable