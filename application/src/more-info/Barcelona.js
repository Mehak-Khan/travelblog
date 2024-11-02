import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hamburger from "../Hamburger";

function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <Carousel 
          autoPlay
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          interval={3000}
          className="carousel-background"
        >
          <div>
            <img src={"../../images/barcelona/park.jpg"} alt="Travel Image 1" />
            <p className="legend">Park Güell</p>
          </div>
          <div>
            <img src={"../../images/barcelona/casabatlo.jpg"} alt="Travel Image 2" />
            <p className="legend">Casa Batlló</p>
          </div>
          <div>
            <img src={"../../images/barcelona/campnou.jpg"} alt="Travel Image 3" />
            <p className="legend">Camp Nou</p>
          </div>
          <div>
            <img src={"../../images/barcelona/bunkers.jpg"} alt="Travel Image 4" />
            <p className="legend">Bunkers del Carmel</p>
          </div>
          <div>
            <img src={"../../images/barcelona/sagradawindows.jpg"} alt="Travel Image 5" />
            <p className="legend">Sagrada Familia</p>
          </div>
          <div>
            <img src={"../../images/barcelona/costa.jpg"} alt="Travel Image 6" />
            <p className="legend">Costa Brava</p>
          </div>
          <div>
            <img src={"../../images/barcelona/montserrat.jpg"} alt="Travel Image 7" />
            <p className="legend">Montserrat</p>
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
          <h1>BARCELONA, SPAIN</h1>
        </div>
      </div>
      <section className="content">
        <p>4 days in Barcelona</p>
        
      </section>
    </div>
  );
}

export default Navbar;
