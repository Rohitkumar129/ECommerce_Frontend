import { useState,useEffect } from "react"
import { Modal,Text, Spacer, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, HStack, VStack, Wrap } from "@chakra-ui/react";
import axios from "axios"
import Productcard from "../../Components/Productcard/Productcard"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
//import { HStack,VStack,Wrap } from "@chakra-ui/react"
import ProductTop from "../../Components/ProductTop/ProductTop"
import ProductSearch from "../../Components/ProductSearch/ProductSearch"
import Activefilters from "../../Components/Activefilter/Activefilter"
import { useNavigate } from "react-router-dom";
const Products=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate=useNavigate()
    useEffect(() => {
        fetch('http://localhost:8080/')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((jsonData) => {
            setData(jsonData);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }

      const openModal = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setSelectedProduct(null);
        setIsOpen(false);
      };
      const AddproductHandler= async (productId)=>{
        try {
          const response =await axios.post(`http://localhost:8080/cart/add`, null, {
            params: {
              product_ID: productId,
            }
          });
          console.log(response)
          if (response.status==200) {
            console.log('Product added to cart successfully!');
            // Redirect to cart page or another page if needed
            setIsOpen(false)
            navigate('/products');
          } else {
            console.error('Failed to add product to cart:', response.data.message);
          }
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      }
    //  console.log(selectedProduct)
return(
    <>
    <Navbar />
    <ProductTop/>
    <HStack alignItems="Start">
        <HStack width="32%">
        <Sidebar/>
        </HStack>
        <VStack>
        <VStack width="79vw" marginLeft="50px" >
        <ProductSearch setProducts={setData} data={data}/>
        <Activefilters/>
        </VStack>
        <VStack>
        <HStack width="80%" marginLeft="100px">
            <Wrap>
            {data.map((product)=>(
              <div key={product.product_ID} onClick={() => openModal(product)}>
              <Productcard property={product}/>
              </div>))}
            </Wrap>
        </HStack>
        </VStack>
        </VStack>
    </HStack>
    {selectedProduct && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent  maxHeight="33.7em" backgroundColor="#2E6793" zIndex={10000}  width="26%" position="absolute"  left="37%" marginTop="120px" padding="50px" borderRadius="10px" alignItems="flex-start" overflowY="scroll" overflowX="hidden">
            <ModalHeader fontFamily="sans-serif" fontSize="13px" fontWeight="600" color="white" paddingLeft="4px">{selectedProduct.name}</ModalHeader>
            <ModalCloseButton marginTop="20px" marginRight="20px" width="1em" borderRadius="5px"/>
            <ModalBody alignItems="center" justifyItems="center">
              <Productcard property={selectedProduct} />
              <Text color="white" fontFamily="sans-serif" fontSize="14px" marginTop="20px" marginBottom="20px" paddingLeft="4px">{selectedProduct.description}</Text>
            </ModalBody>
            <ModalFooter marginTop="12px">
              <HStack>
                 <Button width="10em" onClick={()=>AddproductHandler(selectedProduct.product_ID)} marginRight="5px" marginBlockEnd="0px">Add to cart</Button>
                 <Spacer/>
                 <Button onClick={closeModal} marginBlockEnd="0px">
                Close
              </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
)
}
export default Products