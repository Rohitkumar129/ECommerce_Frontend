import { Box, HStack, ListItem, UnorderedList,Text, Select, Input } from "@chakra-ui/react"
import Logo from "../Logo/Logo"
import './Navbar.css'
import NeedHelp from "../Logo/NeedHelp"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
const Navbar=()=>{
    const [searchTerm,setSearchTerm]=useState('')
    const navigate=useNavigate()
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate('/products')
        }
    };
    const CartIconHandler=()=>{
        navigate('/cart')
    }
return(
    <>
        <Box backgroundColor="#2E6793" font-family="sans-serif" position="fixed" zIndex={10} width="100%" top={0}>
            <HStack spacing ="40em" color="#ffffff" fontSize={11} borderBottom="1px solid #6B8395" paddingLeft="8em">
                <Text color="#ffffff">Welcome to Clicon online eCommerce store.</Text>
                <HStack spacing="1em" display="flex">
                  
                    <UnorderedList styleType="none" display="flex" paddingLeft={0}   borderRight="1px solid #6B8395">
                        <ListItem display="inline" whiteSpace="nowrap" paddingRight="2em">Follow us:</ListItem>
                        <ListItem display="inline" paddingRight="1em"><i class="fa-brands fa-twitter" style={{color:"#ffffff"}}></i></ListItem>
                        <ListItem display="inline" paddingRight="1em"><i class="fa-brands fa-facebook" style={{color:"#ffffff"}}></i></ListItem>
                        <ListItem display="inline" paddingRight="1em"><i class="fa-brands fa-pinterest-p"></i></ListItem>
                        <ListItem display="inline" paddingRight="1em"><i class="fa-brands fa-reddit"></i></ListItem>
                        <ListItem display="inline" paddingRight="1em"><i class="fa-brands fa-youtube"></i></ListItem>
                        <ListItem display="inline" paddingRight="1em"><i class="fa-brands fa-instagram"></i></ListItem>
                    </UnorderedList>

                    <select title="lang" className="language">
                        <option value='option1'>Eng</option>
                        <option value='option2'>Hin</option>
                        <option value='option3'>Tel</option>
                    </select>

                    <select title="currency" className="currencyconverter">
                        <option value='option1'>USD</option>
                        <option value='option2'>INR</option>
                    </select>

                </HStack>
            </HStack>
            <HStack paddingLeft="5em" spacing="9em">
                <HStack>
                    <Logo/>
                    <Text className="clicon">CLICON</Text>
                </HStack>
                <Input className="fontAwesome" placeholder="Search for anything ....                                                                               &#xf002;" width="36em" height="2.3em"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress}></Input>
                <HStack spacing="1em">
                    <UnorderedList styleType="none" display="flex">
                    <ListItem paddingRight="1em"><i class="fa-solid fa-cart-shopping" style={{color:"#ffffff" , cursor:"pointer"}} onClick={CartIconHandler}></i></ListItem>
                        <ListItem paddingRight="1em"><i class="fa-regular fa-heart" style={{color: "#f4f4f6",}} /></ListItem>
                        <ListItem><i class="fa-regular fa-user" style={{color:"#ffffff"}}></i></ListItem>
                    </UnorderedList>
                </HStack>
            </HStack>
        </Box>
        <Box marginTop="90px">
            <HStack height={50} borderBottom="1px solid #F6F8F9">
                <UnorderedList styleType="none" display="flex" alignItems="center">
                    <ListItem paddingRight="1.5em" display="inline">
                        <select style={{backgroundColor:"#ECEFF1" ,fontSize:"11px", color:"#585959", borderColor:"#ECEFF1", height:"2.3em", fontWeight:"600"}}>
                            <option value="All Category">All Category</option>
                        </select>
                    </ListItem>
                    <ListItem  marginLeft={10} marginRight={6}><i class="fa-solid fa-location-dot" style={{color:"#A4A5A5"}} paddingRight="3px"></i></ListItem>
                    <ListItem fontSize={11} color="#A4A5A5" fontWeight="600"><Text>Track Order</Text></ListItem>
                    <ListItem  marginLeft={15} marginRight={6}><i class="fa-solid fa-rotate" style={{color:"#A4A5A5"}}></i></ListItem>
                    <ListItem fontSize={11} color="#A4A5A5" fontWeight="600"><Text>Compare</Text></ListItem>
                    <ListItem marginLeft={15} marginRight={6}><i class="fa-solid fa-headphones" style={{color:"#A4A5A5"}}></i></ListItem>
                    <ListItem fontSize={11} color="#A4A5A5" fontWeight="600"><Text>Customer Support</Text></ListItem>
                    <ListItem marginLeft={10} marginRight={6}><NeedHelp/></ListItem>
                    <ListItem fontSize={11} color="#A4A5A5" fontWeight="600"><Text>Need Help</Text></ListItem>
                </UnorderedList>
                <Text position="absolute" right="5.2em"><i class="fa-solid fa-phone-volume fa-xs" style={{color:"#A4A5A5"}}><span paddingLeft="1em">+1-202-555-0104</span></i></Text>
            </HStack>
        </Box>
    </>
)
}
export default Navbar