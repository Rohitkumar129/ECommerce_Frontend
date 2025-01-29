import { Image,HStack,Text, Button, Spacer } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
const CardItem=({item,setCartItems,cartItems})=>{
    const updateQuantityInBackend = async (itemId, quantity) => {
        try {
          // Replace with your actual backend API URL
          await axios.put(`http://localhost:8080/cart/update?product_ID=${itemId}&quantity=${quantity}`);
        } catch (error) {
          console.error("Failed to update quantity in backend:", error);
        }
      };
    
      const removeItemFromBackend = async (itemId) => {
        try {
          // Replace with your actual backend API URL
          await axios.delete(`http://localhost:8080/cart/remove?product_ID=${itemId}`);
        } catch (error) {
          console.error("Failed to remove item from backend:", error);
        }
      };
    
      const increaseHandler = async (item) => {
        const nextCart = cartItems.map((i) => {
          if (i.id === item.id) {
            i.quantity = i.quantity + 1;
            updateQuantityInBackend(i.id, i.quantity); // Update backend
            return i;
          }
          return i;
        });
        setCartItems(nextCart);
      };
    
      const decreaseHandler = async (item) => {
       
          const nextCart = cartItems.map( (i) => {
            if (i.id === item.id) {
              i.quantity = i.quantity - 1;
               updateQuantityInBackend(i.id, i.quantity); // Update backend
              return i;
            }
            return i;
          });
          setCartItems(nextCart);
      
      };
    
     const RemoveProductHandler=async (item)=>{
        await removeItemFromBackend(item.id); // Remove from backend
          const nextCart = cartItems.filter((i) => i.id !== item.id);
          setCartItems(nextCart);
     }
     
    // console.log("Cart update no",item)
     if(item==undefined)return(<></>)
    return(
        <HStack width="100%">
            <HStack width="50%" paddingLeft="8px" paddingBottom="10px" paddingTop="10px" fontSize="12px" fontWeight="580" fontFamily="sans-serif" marginLeft="1em" >
            <i class="fa-solid fa-xmark fa-s" style={{color:"#AC2B1F",cursor:"pointer"}} onClick={()=>RemoveProductHandler(item)}></i>
            <Image src={item.product.image} alt="No image" width="30px"/>
            <Text marginLeft="3px">{item.product.name}</Text>
            </HStack>
            <Text  width="13%" paddingBottom="10px" paddingTop="10px" fontSize="12px"  fontFamily="sans-serif" marginLeft="5px">${item.product.price}</Text>
                <HStack border="1px solid #EDEAE6" borderRadius="5px"alignItems="center" width="25%" marginRight="50px" marginLeft="50px" marginTop="20px" marginBottom="20px">
                {item.quantity>1&&<Button backgroundColor="white" color="gray"  marginLeft="15px" padding="1px" height="100%" onClick={()=>decreaseHandler(item)} marginBottom="13px"cursor="pointer"><i class="fa-solid fa-minus" style={{color: "#515152"}}></i></Button>}
                {item.quantity==1&&<Button backgroundColor="white" color="gray"  marginLeft="15px" padding="1px" height="100%"  marginBottom="13px"><i class="fa-solid fa-minus" style={{color: "#9c9ea0"}} cursor="pointer"></i></Button>}
                <Text   paddingBottom="10px" paddingTop="10px" fontSize="12px"  fontFamily="sans-serif" >
                0{item.quantity}
                </Text>
                <Spacer/>
                <Button backgroundColor="white" color="gray" padding="1px" height="100%" onClick={()=>increaseHandler(item)} marginBottom="10px" marginLeft="5px" cursor="pointer"><i class="fa-solid fa-plus" style={{color: "#515152;"}}></i></Button>
                </HStack>
            <Text  width="25%" paddingBottom="10px" paddingTop="10px" fontSize="12px"  fontFamily="sans-serif">${item.product.price*item.quantity}</Text>
        </HStack>
    )
}
export default CardItem