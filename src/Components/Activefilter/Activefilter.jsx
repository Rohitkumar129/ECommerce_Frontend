import { HStack,Text } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
const Activefilters=()=>{
    return(
        <HStack height="2.8em"backgroundColor="#EBEDED "spacing="3em" width="78%" fontFamily="sans-serif" fontSize="13px" fontWeight="600">
            <Text color="#99999A"  paddingLeft="1.2em">Active Filters:</Text>
            <Text color="#646464">Electronic Devices</Text><CloseIcon boxSize="7px"/>
        </HStack>
    )
}
export default Activefilters