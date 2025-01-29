import { Box,HStack,Text, VStack,Input, Select,Flex, Spacer } from "@chakra-ui/react"
import './ProductSearch.css'
import { useState } from "react";
import axios from "axios";
const ProductSearch=({setProducts,data})=>{
    const [searchTerm, setSearchTerm] = useState('');
   // console.log('searched products',products);
    const handleSearch = async () => {
        if(searchTerm.length==0)setProducts(data)
        //console.log('searchTerm length',searchTerm.length)
        try {
            const response = await axios.get('http://localhost:8080/search', {
                params: { name: searchTerm }
            });
         setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return(
            <HStack width="78%" marginTop="2em" spacing="5em" alignItems="center">
            <Box>
            <Input  value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyPress={handleKeyPress}
                className="fontAwesome" placeholder="Search for anything ....                                         &#xf002;" width="26em" height="14px" border="0.05px solid #99999A" borderRadius="5px"></Input>
            </Box>
            <Spacer/>
            <HStack>
            <Text paddingRight="10px" fontSize="12px" fontWeight="740" fontFamily="sans-serif" color="#646464" whiteSpace="nowrap">Sort by:</Text>
            <select style={{height:"3em",width:"180px",cursor:"pointer"}}>
                <option>All</option>
                <option>Most Popular</option>
            </select>
            </HStack>
            </HStack>
    )
}
export default ProductSearch