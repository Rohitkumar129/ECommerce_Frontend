import { Box,Input,Text, VStack,Button, FormLabel, HStack, UnorderedList } from "@chakra-ui/react"
import './Footer.css'
import { Image,Link,Wrap,WrapItem } from "@chakra-ui/react"
import Logo from "../Logo/FooterIcon"
const Footer=()=>{
    return(
    <Box className="overall">
        <Box className="Subscribe">
            <VStack spacing={0} marginBottom="35px" paddingBottom="2em">
                <Text className="text" fontSize="20px" fontWeight="600" color="white">Subcribe to our newsletter</Text>
                <Text className="about">Clicon is a premier e-commerce platform offering a wide range of high-quality products</Text>
                <Text className="about">with a focus on customer satisfaction.Subscribe to our newsletter .</Text>
                <div class="pt-site-footer__submit" >
                <input type="email" placeholder="Your e-mailadress"/>
                <button>SUBSCRIBE <i class="fa-solid fa-arrow-right" style={{color:"white",marginLeft:'10px'}}></i></button>
                </div>
                <HStack spacing={40} borderTop="1px solid #b1b2b3">
                    <Text className="brands_google">Google</Text>
                    <Text className="brands_amazon">amazon</Text>
                    <Text className="brands_philips">PHILIPS</Text>
                    <Text className="brands_toshiba">TOSHIBA</Text>
                    <Text className="brands_samsung">Samsung</Text>
                </HStack>
            </VStack>
            <HStack className="bottom"  align="initial" spacing ={70} fontSize="12px" color="#b1b2b3" marginInlineEnd="0" marginInlineStart="0" fontFamily="sans-serif" padding="40px" paddingLeft="80px" borderBottomRadius="10px">
                <VStack>
                    <div>
                        <div className="Clicon1"><Logo/><p>CLICON</p></div>
                        <div className="Customer_supports"><p>Customer supports</p></div>
                        <p>(625) 555-0129</p>
                        <p>452 Washington Ace</p>
                        <p>Manchester, Kontucky 39495</p>
                        <p>info@clicon.com</p>
                    </div>
                </VStack>
                <VStack spacing={10} align="start" >
                <Text fontSize="lg" fontWeight="bold">Top Categories</Text>
                <VStack spacing={7} align="start">
                    <Text className="footer-category">Electronics</Text>
                    <Text className="footer-category">Fashion</Text>
                    <Text className="footer-category">Home & Kitchen</Text>
                    <Text className="footer-category">Beauty & Personal Care</Text>
                    <Text className="footer-category">Health & Wellness</Text>
                    <Text className="footer-category">Toys & Games</Text>
                </VStack>
            </VStack>
            <VStack spacing={10} align="start" p={4}>
                <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
                <VStack spacing={7} align="start">
                    <Text className="footer-link">Track Order</Text>
                    <Text className="footer-link">Shop Products</Text>
                    <Text className="footer-link">Compare</Text>
                    <Text className="footer-link">Show Cart</Text>
                    <Text className="footer-link">Wishlist</Text>
                </VStack>
            </VStack>
                <VStack spacing={4} align="stretch">
                <Text className="downloadText">DOWNLOAD APP</Text>
                    <Link href="#" isExternal>
                        <Button className="appButton" width="100%" backgroundColor="#585858">
                        <i class="fa-brands fa-apple"></i><Text marginLeft="20px">App Store</Text>
                        </Button>
                    </Link>
                    <Link href="#" isExternal>
                        <Button width="100%" className="appButton" backgroundColor="#585858">
                        <i class="fa-brands fa-google-play"></i><Text marginLeft="20px">Google Play</Text>
                        </Button>
                    </Link>
                </VStack>
                <VStack spacing={6} align="start" p={4}>
                <Text fontSize="lg" fontWeight="bold">Popular Tags</Text>
                <Wrap spacing={5} shouldWrap>
                    <WrapItem>
                        <Box className="tag">Electronics</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Fashion</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Home & Kitchen</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Beauty</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Health</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Toys</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Sports</Box>
                    </WrapItem>
                    <WrapItem>
                        <Box className="tag">Automotive</Box>
                    </WrapItem>
                </Wrap>
            </VStack>
            </HStack>
        </Box>
        <Box className="Clicon">

        </Box>
    </Box>
    )
}
export default Footer