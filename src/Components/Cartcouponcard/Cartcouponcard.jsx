import { VStack,Text,FormControl, Textarea,Stack } from "@chakra-ui/react"

const Cartcouponcard=()=>{
    return(
        <VStack width="100%" padding="15px" marginLeft="1em" marginRight="5em" alignItems="flex-start" border="1px solid #EDEAE6" borderRadius="4px">
            <Stack width="100%" borderBottom="1px solid #EDEAE6">
            <Text fontFamily="sans-serif" fontSize="14px" fontWeight="590" marginBottom="0.5em" >Coupon Code</Text>
            </Stack>
            <Textarea fontFamily="sans-serif" placeholder=" Email address" width="100%" height="2.2em" border="1px solid #EDEAE6" paddingTop="6px"paddingLeft="20px" marginTop="5px"></Textarea>
        </VStack>
    )
}
export default Cartcouponcard