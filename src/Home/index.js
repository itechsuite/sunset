import React from "react";
import { Container } from "react-bootstrap";
import CarouselItem from "../components/CarouselItem";
import RecentProperties from "../components/RecentProperties";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../res/images/logo.png";
import backdrop from "../res/images/backdrop.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="container-fluid">
        <section>
          <CarouselItem />
        </section>
        <section>
          <div class="hero min-h-screen bg-base-200">
            <div class="flex-col hero-content lg:flex-row-reverse">
              <img src={logo} class="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 class="mb-5 text-5xl font-bold text-uppercase">
                  <span class="display-5">welcome to </span>Sunset
                </h1>
                <p class="mb-5 ">
                  We are daily driven to keep our promise, increase our land
                  bank, expand our client base offering excellent services and
                  affordable housing products with a singular mission to exceed
                  expectations.
                </p>
                <button class="btn btn-success">About Us</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section">{/* <RecentProperties /> */}</section>
        <section className="section-properties">
          <div class="text-center">
            <h1 class="display-5 pt-4  ">
              {" "}
              Check out list of our finest properties
            </h1>
            <p class="tet-dark"> with world class facilities and locations </p>
          </div>
        </section>

        {/* <section className="section-products">
          <div>
            <h1> Our housing products</h1>
          </div>
        </section> */}

        <section className="section-join-us">
         
        <div class="hero min-h-screen bg-base-200">
            <div class="text-center hero-content">
                <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold text-white">
                        Join us now
                    </h1> 
                <p class="mb-5">
                        
                    </p> 
                <button class="btn btn-primary"> Contact Us </button>
                </div>
            </div>
            </div>
        </section>

        {/* <section>
          <h1> lets call you</h1>
        </section> */}
      </div>
    </div>
  );
}
