import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hamburger from "../Hamburger";
import DayCard from './DayCard';
import Modal from './Modal';

function Navbar() {
    const days = [
        { id: 1, title: 'Day 1: Arrival and La Rambla', summary: 'Welcome to Barcelona! After settling into our hotel...', details: 'Detailed information about Day 1', image: "../../images/sagrada.jpg"},
        { id: 2, title: 'Day 2: Sagrada Familia and Gothic Quarter', summary: 'Today we visited the iconic Sagrada Familia...', details: 'Detailed information about Day 2' },
        { id: 3, title: 'Day 2: Sagrada Familia and Gothic Quarter', summary: 'Today we visited the iconic Sagrada Familia...', details: 'Detailed information about Day 2' },
        { id: 4, title: 'Day 2: Sagrada Familia and Gothic Quarter', summary: 'Today we visited the iconic Sagrada Familia...', details: 'Detailed information about Day 2' },
        { id: 5, title: 'Day 2: Sagrada Familia and Gothic Quarter', summary: 'Today we visited the iconic Sagrada Familia...', details: 'Detailed information about Day 2' },
        { id: 6, title: 'Day 2: Sagrada Familia and Gothic Quarter', summary: 'Today we visited the iconic Sagrada Familia...', details: 'Detailed information about Day 2' },
        { id: 7, title: 'Day 2: Sagrada Familia and Gothic Quarter', summary: 'Today we visited the iconic Sagrada Familia...', details: 'Detailed information about Day 2' },
        // Add more days as needed
      ];
    const [selectedDay, setSelectedDay] = useState(null);

    const handleCardClick = (day) => {
      setSelectedDay(day);
    };
  
    const handleCloseModal = () => {
      setSelectedDay(null);
    };
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
        <p class="title barcelona">7 days in Barcelona - Everything you need to know!</p>
        {/* <nav>
        <ul>
            <li><a href="#day1">Day 1 - Arrival, Montjuic & Bunkers del Carmel</a></li>
            <li><a href="#day2">Day 2 - Sagrada Familia & Park Güell</a></li>
            <li><a href="#day3">Day 3</a></li>
            <li><a href="#day4">Day 4</a></li>
            <li><a href="#day5">Day 5</a></li>
            <li><a href="#day6">Day 6</a></li>
            <li><a href="#day7">Day 7</a></li>
        </ul>
    </nav>
        <section className="days" id="day1">
            <h2>Day 1: Arrival, Montjuic & Bunkers del Carmel</h2>
            <p>Welcome to Barcelona! After settling into our hotel, we took a leisurely stroll down La Rambla...</p>
        </section>
        <section className="days" id="day2">
            <h2>Day 2: Sagrada Familia & Park Güell</h2>
            <p>W....</p>
        </section> */}
         <div className="day-cards">
          {days.map(day => (
            <DayCard key={day.id} day={day} onClick={() => handleCardClick(day)} />
          ))}
        </div>
      <Modal day={selectedDay} onClose={handleCloseModal} />
        
      </section>
    </div>
  );
}

export default Navbar;
