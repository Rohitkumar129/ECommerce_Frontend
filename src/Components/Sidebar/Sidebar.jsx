import { VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Radio,RadioGroup,Stack,Text } from "@chakra-ui/react"
import { Slider,SliderFilledTrack,SliderThumb,SliderTrack } from "@chakra-ui/react"
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'
import './Sidebar.css'
const Sidebar=()=>{
    const [value, setValue] = useState('Mobile Phones')
    const [range, setRange] = useState([10, 30]);
    return (
      <RadioGroup onChange={(value)=>setValue(value)} value={value} >
        <VStack color="#99999A" alignItems="start" paddingTop="2.5em" paddingLeft="6em" fontFamily="sans-serif" fontSize="12px" fontWeight="600" spacing="1em" >
        <Text color="#646464"fontWeight={700} fontSize={14}> CATEGORY</Text>
        <Radio  value="Mobile Phones" className="radio">Mobile Phones</Radio>
        <Radio value="Console Gaming" className="radio">Console Gaming</Radio>
        <Radio value="Laptops & computers" className="radio">Laptops</Radio>
        <Radio value="Headphones" className="radio">Headphones</Radio>
        <Radio value="Earbuds" className="radio">Earbuds</Radio>
        <Radio value="Speakers" className="radio">Speakers</Radio>
        <Radio value="Mouse" className="radio">Mouse</Radio>
        <Radio value="Desktop" className="radio">Desktop</Radio>
        <Radio value="iPhone" className="radio">iPhone</Radio>
        <Radio value="Smart Watch" className="radio">Smart Watch</Radio>
        <Radio value="TV" className="radio">Home Appliances</Radio>
        <Radio value="War" className="radio" >Warable Technology</Radio>
        <Text color="#646464"fontWeight={700} fontSize={14} marginTop="2em">PRICE RANGE</Text>
        <RangeSlider  aria-label={['min', 'max']}
          defaultValue={range}
          min={0}
          max={100}
          step={1}
          onChange={(val) => setRange(val)}>
        <RangeSliderTrack>
            <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
        </RangeSlider>
        </VStack>
      </RadioGroup>
    )
   
}
export default Sidebar