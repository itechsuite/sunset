import React from "react";
import {
Box,

FooterLink,
Heading,
} from "./FooterStyle";
import {ModalFooter, Container, Row, Col} from 'react-bootstrap'
import logo from '../../res/images/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
return (
    <footer class="p-10 footer bg-base-200 bg-dark text-base-content">
    <div class="">
        <div class="bg-light rounded-corners">
        <img src={logo}  class="img-fluid" width="100"  alt="logo"/>
        </div>
        <p class="text-white h5 text-center text-uppercase"> sunset</p>
    </div> 
    <div class="text-white">
      <span class="footer-title text-white">Contact Us </span> 
        <p> For Complaints and enquiries you can reach us on any of the numbers or visit our head office at</p>
        <p> 75B Adeyemo Akapo, Omole Phase 1. Ikeja, Lagos state</p>
        <p>  Call us +2349058590355 +2349058590357 +2349058590356</p>
        <p > <a href="mailto:contact@sunset.com.ng" > contact@sunset.ng</a></p>
    </div> 
  
    <div class="text-white">
      <span class="footer-title">Others</span> 
      <a class="link link-hover">Terms of use</a> 
      <a class="link link-hover">Privacy policy</a> 
      <a class="link link-hover">Cookie policy</a>
    </div>
  </footer>

);
};
export default Footer;
