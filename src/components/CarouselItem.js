import { height } from 'dom-helpers';
import React from 'react'

import AwesomeSlider from 'react-awesome-slider';

import banner1 from '../res/images/banner.jpg'
import banner2 from '../res/images/banner2.jpg'
// Import css files

import Slider from "react-slick";

const CarouselItem  = () =>{

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
       <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    )
}


export default CarouselItem
