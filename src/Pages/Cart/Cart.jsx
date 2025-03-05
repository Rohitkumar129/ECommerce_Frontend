import Navbar from "../../Components/Navbar/Navbar";
import CartTop from "../../Components/CartTop/CartTop";
import CartTable from "../../Components/CartTable/CartTable";
import { useState, useEffect } from "react";
import { HStack,VStack } from "@chakra-ui/react";
import Cardtotalcard from "../../Components/CartTotalCard/Carttotalcard";
const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [error, setError] = useState('');
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    fetch('http://localhost:8080/cart')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setCartItems(jsonData);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  //console.log(cartItems);
  return (
    <div className="cart">
      <Navbar/>
      <CartTop />
      <HStack marginTop="3em" alignItems="flex-start">
        <CartTable cartItems={cartItems} setCartItems={setCartItems} />
         <Cardtotalcard cartItems={cartItems}/>
      </HStack>
    </div>
  )
}
export default Cart;