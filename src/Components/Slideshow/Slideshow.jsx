import { Box, HStack, VStack, Image,Text,Button, Container, Spacer } from "@chakra-ui/react"
//import './Slideshow.css'
import { useNavigate } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Slideshow=()=>{
    const navigate=useNavigate()
    const AddHandler=()=>{
        navigate('/products')
    }
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplayspeed:1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box className="container" position="relative">
    <HStack>
    <Box width="59%" height="365px" marginLeft="1em" backgroundColor="#f3f3f3">
    <Slider {...settings} >
        <Box>
             <HStack className="slideshow"  marginTop="50px" paddingLeft="40px">
                <VStack class="productdescription" height="300px" alignItems="flex-start" marginRight="1em" >
                 <Text className="above" color="#1A87F4" fontSize="11px" fontWeight= "700" fontFamily="sans-serif" marginBlockEnd="2px">---THE BEST PLACE TO PLAY</Text>
                 <Text className="company" fontFamily="sans-serif" fontSize="30px" fontWeight="600" marginBlockEnd="7px">Xbox Consoles</Text>
                 <Text className="description" color="#747677" fontFamily="sans-serif" fontSize="11px" fontWeight="600">Save up to 50% on select Xbox games. Get</Text>
                 <Text className="description"color="#747677" fontFamily="sans-serif" fontSize="11px" fontWeight="600"> 3 months of PC Game Pass for $2 USD </Text>
                 <Button className="ShowAllProducts" marginTop="1em" size='lg' width="10em" fontSize="11" borderRadius="2px" border="none" padding="1em" fontWeight="600" onClick={AddHandler} cursor="pointer">SHOP NOW <i class="fa-solid fa-arrow-right" style={{color:"white",marginLeft:'10px'}}></i></Button>
                 </VStack>
                 <Spacer/>
                 <Image src="https://th.bing.com/th/id/OIP.tJUvawhO_m-tjtD5v9YC8gHaMC?rs=1&pid=ImgDetMain" alt="console image" className="console" marginRight="50px" padding="10px" width="25%" borderRadius="20px"></Image>
        </HStack>  
        </Box>
        <Box>
             <HStack className="slideshow"  marginTop="50px" paddingLeft="40px">
                <VStack class="productdescription" height="300px" alignItems="flex-start" marginRight="1em" >
                 <Text className="above" color="#1A87F4" fontSize="11px" fontWeight= "700" fontFamily="sans-serif" marginBlockEnd="2px">---THE BEST PLACE TO PLAY</Text>
                 <Text className="company" fontFamily="sans-serif" fontSize="30px" fontWeight="600" marginBlockEnd="7px">Xbox Consoles</Text>
                 <Text className="description" color="#747677" fontFamily="sans-serif" fontSize="11px" fontWeight="600">Save up to 50% on select Xbox games. Get</Text>
                 <Text className="description"color="#747677" fontFamily="sans-serif" fontSize="11px" fontWeight="600"> 3 months of PC Game Pass for $2 USD </Text>
                 <Button className="ShowAllProducts" marginTop="1em" size='lg' width="10em" fontSize="11" borderRadius="2px" border="none" padding="1em" fontWeight="600" onClick={AddHandler} cursor="pointer">SHOP NOW <i class="fa-solid fa-arrow-right" style={{color:"white",marginLeft:'10px'}}></i></Button>
                 </VStack>
                 <Spacer/>
                 <Image src="https://th.bing.com/th/id/OIP.tJUvawhO_m-tjtD5v9YC8gHaMC?rs=1&pid=ImgDetMain" alt="console image" className="console" marginRight="50px" padding="10px" width="25%" borderRadius="20px"></Image>
        </HStack>  
        </Box>
        <Box>
             <HStack className="slideshow"  marginTop="50px" paddingLeft="40px">
                <VStack class="productdescription" height="300px" alignItems="flex-start" marginRight="1em" >
                 <Text className="above" color="#1A87F4" fontSize="11px" fontWeight= "700" fontFamily="sans-serif" marginBlockEnd="2px">---THE BEST PLACE TO PLAY</Text>
                 <Text className="company" fontFamily="sans-serif" fontSize="30px" fontWeight="600" marginBlockEnd="7px">Xbox Consoles</Text>
                 <Text className="description" color="#747677" fontFamily="sans-serif" fontSize="11px" fontWeight="600">Save up to 50% on select Xbox games. Get</Text>
                 <Text className="description"color="#747677" fontFamily="sans-serif" fontSize="11px" fontWeight="600"> 3 months of PC Game Pass for $2 USD </Text>
                 <Button className="ShowAllProducts" marginTop="1em" size='lg' width="10em" fontSize="11" borderRadius="2px" border="none" padding="1em" fontWeight="600" onClick={AddHandler} cursor="pointer">SHOP NOW <i class="fa-solid fa-arrow-right" style={{color:"white",marginLeft:'10px'}}></i></Button>
                 </VStack>
                 <Spacer/>
                 <Image src="https://th.bing.com/th/id/OIP.tJUvawhO_m-tjtD5v9YC8gHaMC?rs=1&pid=ImgDetMain" alt="console image" className="console" marginRight="50px" padding="10px" width="25%" borderRadius="20px"></Image>
        </HStack>  
        </Box>
    </Slider>
    </Box>
           <VStack className="dummy images" width="40%">
                 <Image borderRadius="3px" width="87%" src="https://fdn.gsmarena.com/imgroot/static/headers/makers/google-2023-1.jpg"></Image>
                 <Image borderRadius="3px" width="87%" src="https://fdn.gsmarena.com/imgroot/static/headers/makers/google-2023-1.jpg"></Image>
             </VStack>
             </HStack>
    </Box>
  );
}
export default Slideshow;
