import { VStack,Text, HStack,Spacer,Button } from "@chakra-ui/react"
import './Carttotalcard.css'
import Cartcouponcard from "../Cartcouponcard/Cartcouponcard"
const Cardtotalcard=({cartItems})=>{
    let total=0;
    cartItems.forEach(element => {
        total+=(element.quantity*element.product.price)
    });
    let subtotal=total
    let Tax=0;
    cartItems.forEach(e=>{
        Tax+=(0.07*e.quantity*e.product.price)
    })
    Tax=Math.round(Tax)
    let discount=0;
    cartItems.forEach(e=>{
        discount+=(0.02*e.quantity*e.product.price)
    })
    discount=Math.round(discount)
    total=total-discount+Tax
    return(
        <VStack width="30%"  marginLeft="3em" marginRight="3.5em">
    <VStack width="100%" padding="15px" marginLeft="1em" marginRight="5em" alignItems="flex-start" border="1px solid #EDEAE6" borderRadius="4px">
        <Text fontFamily="sans-serif" fontSize="14px" fontWeight="590" marginBottom="1em">Card Totals</Text>
        <HStack width="100%" className="bill">
            <Text>Sub total</Text>
            <Spacer/>
            <Text color="#646566">${subtotal}</Text>
        </HStack>
        <HStack width="100%"className="bill">
            <Text >Shipping</Text>
            <Spacer/>
            <Text color="#646566">Free</Text>
        </HStack >
        <HStack width="100%" className="bill">
            <Text >Discount</Text>
            <Spacer/>
            <Text color="#646566">${discount}</Text>
        </HStack>
        <HStack width="100%" className="bill" borderBottom="1px solid #EDEAE6" paddingBottom="1em">
            <Text >Tax</Text>
            <Spacer/>
            <Text color="#646566" >${Tax}</Text>
        </HStack>
        <HStack className="bill" width="100%" color="#646566">
        <Text fontSize="14px">Total</Text>
            <Spacer/>
            <Text>${total}</Text>
        </HStack>
        <Button className="bill" width="100%" color="white" fontSize="11px" fontWeight="590" padding="17px" cursor="pointer">PROCEED TO CHECKOUT<i class="fa-solid fa-arrow-right" marginLeft="2em"></i></Button>
    </VStack >
    <Cartcouponcard/>
    </VStack>
    )
}
export default Cardtotalcard