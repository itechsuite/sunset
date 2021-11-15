import { height } from 'dom-helpers';
import React from 'react'

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import banner1 from '../res/images/banner.jpg'
import banner2 from '../res/images/banner2.jpg'
const CarouselItem  = () =>{
    return (
        <AwesomeSlider 
            
        organicArrows={true} style={{height:500}}>
        
        <div>
            <div>
            <h3> house at lekki</h3>

            <img src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />

            </div>
        </div>
        <div>
            <img src={banner2} />
        </div>
        <div>
            <img src={banner2} />  
        </div>
        
      </AwesomeSlider>
    )
}


export default CarouselItem
