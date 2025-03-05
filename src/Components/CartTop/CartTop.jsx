import { HStack,Text} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
const CartTop=()=>{
    const navigate=useNavigate();
    const onclickHandler=()=>{
        navigate('/')
    }
    return(
    <HStack paddingLeft="3.2em" color="#616263" height="3.5em"width="100%" spacing='8px' backgroundColor="#EBEDED">
        <i class="fa-solid fa-house" style={{color:"#99999A",cursor:"pointer"}} onClick={onclickHandler}></i>
        <Text className="text" onClick={onclickHandler} cursor="pointer">Home</Text>
        <ChevronRightIcon color='#99999A' />
        <Text className="text" color="#41B0FB">Shopping cart</Text>
    </HStack>
    )
}
export default CartTop