import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hamburger from "./Hamburger";
import cover from './assets/images/cover.jpg';
import laos from './assets/images/laos.jpg';
import siargao from './assets/images/siargao.jpg';
import kohlanta from './assets/images/kohlanta.jpg';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <Carousel 
          autoPlay
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          interval={5000}
          className="carousel-background"
        >
          <div>
            <img src={cover} alt="Travel Image 1" />
            <p className="legend">Mount Rinjani, Indonesia</p>
          </div>
          <div>
            <img src={laos} alt="Travel Image 2" />
            <p className="legend">Nam Xay Viewpoint, Laos</p>
          </div>
          <div>
            <img src={kohlanta} alt="Travel Image 3" />
            <p className="legend">Koh Lanta, Thailand</p>
          </div>
          <div>
            <img src={siargao} alt="Travel Image 4" />
            <p className="legend">Siargao, Philippines</p>
          </div>
          {/* Add more images as needed */}
        </Carousel>
        <div className="hamburger">
          <Hamburger />
        </div>
        <div className="sides">
          {/* <a href="#" className="logo">BLOG</a> */}
        </div>
        
        <div className="info">
          <h1>TRAVEL? TRAVEL.</h1>
          <div className="meta">
            <a target="_b" className="author"></a>
            By <a target="_b">Mehak Khan</a>
          </div>
        </div>
      </div>
      <section className="content">
        <p>If you've made it thus far, it means you are a fellow travel fiend. Just like me! I have travelled to 15 countries solo across Asia, Europe and Africa. Through my travels, I have gained invaluable experience and have also made many mistakes that I am here to share with you, so you can too, see the world with your own eyes (and avoid getting scammed while at it). Who says travelling has to be expensive?</p>
        <p align="center"><a href="https://www.instagram.com/mehaks.living/?hl=en" className="btn insta" target="_b">Follow me on Instagram</a></p>
        <p align="center">
        <Link to="/Blog" className="btn learn">Learn more about my Travels</Link>
        </p>
        <p align="center">
        <Link to="/ContactForm" className="btn questions">Have questions? Ask me!</Link>
        </p>
      </section>
    </div>
  );
}

export default Navbar;
