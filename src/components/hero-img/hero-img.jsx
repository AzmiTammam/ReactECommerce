import React from 'react'
import "./hero-img.css"
import {Link} from "react-router-dom"

function HeroImage() {
    return (
        <div class="home-container">
        <div class="home-left">
          <h1>Play ball your way</h1>
          <Link to="/sports"><button>Buy now!</button></Link>
        </div>
        <div class="home-right">
            <img src="https://i5.walmartimages.com/asr/0e13ecac-56b8-4d1a-ac06-d688b1b289d0_1.6d78ca1b31bf72db4dbe3386ca830c9a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" width={350} alt="controller" />
        </div>
    </div>
    )
}

export default HeroImage
