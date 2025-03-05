import Navbar from "../../Components/Navbar/Navbar"
import Slideshow from "../../Components/Slideshow/Slideshow"
import Footer from "../../Components/Footer/Footer"
import { useState } from "react"
const Home=({searchTerm,setSearchTerm})=>{
    return(
        <div className="Home">
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Slideshow />
            <br/>
            <Footer/>
        </div>
    )
}
export default Home