import { Text,HStack } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import './ProductTop.css'
import { useNavigate } from "react-router-dom"
const ProductTop=()=>{
    const navigate=useNavigate()
    const homeHandler=()=>{
        navigate("/")
    }
    return(
<HStack paddingLeft="3.2em" color="#616263" height="3.5em"width="100%" spacing='8px' backgroundColor="#EBEDED">
    <i class="fa-solid fa-house" style={{color:"#99999A",cursor:"pointer"}} onClick={homeHandler}></i>
    <Text className="text" onClick={homeHandler} cursor="pointer">Home</Text>
    <ChevronRightIcon color='#99999A' />
    <Text className="text">Shop</Text>
    <ChevronRightIcon color='#99999A' />
    <Text className="text">Shop Grid</Text>
    <ChevronRightIcon color='#99999A' />
    <Text className="text" color="#41B0FB">Electronic Devices</Text>
</HStack>
    )
}
export default ProductTop