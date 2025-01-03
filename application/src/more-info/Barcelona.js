import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hamburger from "../Hamburger";
import DayCard from './DayCard';
import Modal from './Modal';

function Navbar() {
    const dayCards = [
        { id: 1, title: 'Overview', 
        summary: '', 
        type: "overview",
        details: [
          'Barcelona was the destination of my first-ever solo trip, a choice driven by careful research and a desire for both adventure and safety. As a solo female traveler coming from Canada, I prioritized safety, and Barcelona consistently stood out as an ideal location.',
          'Beyond safety, I sought a bit of a culture shock. Traveling within Canada, while beautiful, would not provide the cultural immersion I craved. Barcelona, with its rich history and vibrant culture, promised a unique experience. My fondness for Spanish culture further cemented my decision; the city\'s art, architecture, and culinary delights have always fascinated me.',
          'Barcelona checked all my boxes for a perfect one-week solo trip, and it did not disappoint. From the bustling streets of Las Ramblas to the serene beauty of Park Güell, every moment in this city was a blend of excitement and discovery.',
          'This journey was not just about seeing new places but also about stepping out of my comfort zone and embracing the unknown. Barcelona will forever hold a special place in my heart, as this is where my solo travel adventures began. The city marked the start of a journey that taught me independence, resilience, and the joy of exploring the world on my own terms. It was the perfect beginning to what I hope will be many more solo adventures to come.'
        ], 
        image: "../../images/barcelona/overview.jpg", 
      },
        { id: 2, title: 'Recommendations', 
        summary: 'Today we visited the iconic Sagrada Familia...', 
        details: ['Detailed information about Day 2'], 
        type: "recommendations",
        image: "../../images/barcelona/recs.jpg",
        accomodation: [
          {
            title: 'Hostel One Paralelo',
            description: 'Hostel One Paralelola was the perfect first hostel for me. I stayed in a mixed dorm and paid only around $20 a night during the low season in February. The privacy curtains on the bunk were a nice touch. The social vibe was amazing with bar crawls, game nights, and plenty of opportunities to meet people—I made great friends! The hostel was also clean and well-maintained. Highly recommend it for anyone looking for a fun, social place to stay in Barcelona!'
          }
        ],
        placesToSee: [
          {
            title: 'Sagrada Familia',
            description: 'The Sagrada Familia is one of Barcelona’s most iconic landmarks, designed by the famous architect Antoni Gaudí. It’s an awe-inspiring piece of architecture, with its intricate facades and stunning interior. The colorful windows inside the basilica are truly mesmerizing, casting vibrant light across the space. I highly recommend visiting early in the morning to avoid long queues, and purchasing your tickets in advance is a must. I also took a guided English tour with an audio guide (for about 10 extra bucks), which really helped me understand the history and the unique architectural elements of the basilica, making the experience even more meaningful.'
          },
          {
            title: 'Park Güell',
            description: 'Another of Gaudí’s masterpieces, Park Güell is a public park full of vibrant mosaics, whimsical sculptures, and panoramic views of the city. It’s the perfect spot for a leisurely stroll, and whether you’re an art lover or simply enjoy being outdoors, Park Güell is a place that offers something for everyone. The colorful tiles and unique architecture make it a photographer’s paradise, and it’s a fantastic place to spend a few hours soaking in the beauty of the city.'
          },
          {
            title: 'Camp Nou',
            description: 'If you’re a football fan, then a visit to Camp Nou is a must. Home to FC Barcelona, this massive stadium is a true football shrine. The museum offers an incredible insight into the history of the club, with displays of its greatest moments and achievements. Even if you’re not a football enthusiast, the atmosphere is so electric and the history of the stadium so rich, that it’s a worthwhile experience. The tour also takes you through the locker rooms, the pitch, and the stands, offering a complete football experience.'
          },
          {
            title: 'Bunkers del Carmel',
            description: 'The Bunkers del Carmel offer one of the best panoramic views of Barcelona. These former military bunkers provide a stunning view of the city and are a fantastic spot to watch the sunset. It’s a great place to relax and take in the beauty of the city from above. A bit off the beaten path, it’s less crowded than some of the more famous landmarks, making it a perfect escape for a peaceful moment.'
          },
          {
            title: 'Montserrat',
            description: 'Montserrat is a mountain range located just outside Barcelona, and it’s one of the most amazing places I visited. The views from the top of Montserrat are absolutely breathtaking, and the monastery at the summit is a peaceful, serene spot to take in the beauty around you. Montserrat offers a unique blend of nature, history, and spiritual tranquility, making it a must-visit destination. I highly recommend spending some time here to fully soak in its beauty.'
          },
          {
            title: 'Gothic Quarters & Food market?'
          }
        ],
        activities: [
          {
            title: 'Flamenco Dance Show',
            description: 'I was lucky enough to experience a traditional flamenco dance performance during my time in Barcelona, and it was nothing short of magical. Flamenco is a deeply emotional and expressive art form, with dance and music telling a captivating story. The intensity and passion of the dancers were truly mesmerizing, and it was a perfect way to immerse myself in Spanish culture. I got my tickets for the show through my hostel, but flamenco performances are very common in Barcelona, and you can easily find many shows throughout the city. If you’re in Barcelona, be sure to check out a flamenco show to experience this amazing part of Spain’s heritage.'
          },
          {
            title: 'Scuba Diving at Costa Brava',
            description: 'Costa Brava is one of Spain’s most stunning coastal areas, and I was completely blown away by its beauty. I took a bus from Barcelona to explore the area, and it was worth every minute of the journey. The beaches are pristine, the water is crystal-clear, and the small seaside towns are absolutely charming. It’s a perfect escape from the bustling city, offering a tranquil atmosphere and breathtaking natural beauty. While I was there, I also tried beginner’s scuba diving with the company SuperDive Tossa De Mar, which was an unforgettable experience in the Mediterranean’s crystal-clear waters.'
          },
          {
            title: 'Horseback Riding',
            description: 'I booked an entire tour through Expedia that included both a visit to Montserrat and a horseback riding experience in the Parc Natural de la Muntanya de Montserrat. The tour picked me up near my hostel in Barcelona, making it incredibly convenient. The horseback riding portion took me through the natural park, allowing me to experience the stunning landscape and enjoy incredible views of the rugged terrain and unique rock formations. While the tour was a bit rushed, it was still a memorable adventure that allowed me to explore the area in a unique and exciting way.'
          }
        ],
        foodToTry: [
          'Walk down La Rambla',
          'Explore Montjuïc',
          'Take a boat trip to Costa Brava',
          'Hike in Collserola Natural Park',
        ],
        placesImage: "../../images/sagrada.jpg", // Image for places to see
        foodImage: "../../images/paella.jpg", // Image for food to try
        activitiesImage: "../../images/montjuic.jpg", // Image for activities}
      },
      
        { id: 3, title: 'Personal Stories', 
        summary: '', 
        type: 'personal-stories',
        image: "../../images/barcelona/personal.jpg",
        details: 
        [
        {
          title: 'Making Friends in the Gothic Quarter',
          description: 'While roaming the charming streets of the Gothic Quarter, I had an unexpected and delightful experience. A girl asked me to take her photo as she was traveling alone. After helping her out, I asked her to return the favor, and as we were exchanging cameras, another solo traveler overheard us and joined in. The three of us instantly hit it off and spent the next two days exploring Barcelona together. It was an absolute blast! The moral of this story? You never know where and when you’ll meet amazing people. Sometimes, the best travel experiences come from these unexpected encounters.'
        },
        {
          title: 'Learning Salsa on the Subway',
          description: 'One of the coolest experiences I had in Barcelona was learning how to salsa on the subway! A group of us decided to have a spontaneous dance session, and it turned out to be so much fun. We even took our newfound skills to a local salsa bar afterward, which I highly recommend. The energy, the music, and the sheer joy of dancing with friends made it an unforgettable night. Barcelona truly knows how to bring people together and create lasting memories!'
        },
        ]
      },
        { id: 4, 
          title: 'Practical Tips', 
          summary: 'Today we visited the iconic Sagrada Familia...',
          type: 'tips',
          image: "../../images/barcelona/tips.jpg",
          details: [
            {
              title: 'Get a fanny pack!',
              description: 'Seriously, keep your phone close to you. Pickpocketing is very common in crowded areas, especially around tourist spots. A fanny pack is a great way to keep your valuables secure and easily accessible.'
            },
            {
              title: 'Get a SIM from Airalo.',
              description: 'It’s cheap, easy, and you’ll stay connected throughout your trip without breaking the bank. Trust me, it’s a lifesaver, and the price is way better than roaming fees from your home country.'
            },
            {
              title: 'Pack a jacket for the evenings - February Edition',
              description: 'I went in February and didn’t pack enough warm clothes. I figured being from Canada, I wouldn\'t need it, but the nights were chilly! Even if it’s warm during the day, the evenings can get surprisingly cold.'
            },
            {
              title: 'Learn some basic Spanish.',
              description: 'Learning simple phrases like "Hello," "Thank you," or "Table for one" will go a long way. Even though many people speak English, it’s always appreciated when you try speaking the local language.'
            }
          ]
        }
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
        <p class="title-blog barcelona">7 days in Barcelona - Welcome to my first solo adventure.</p>
         <div className="day-cards">
          {dayCards.map(day => (
            <DayCard key={day.id} day={day} onClick={() => handleCardClick(day)} />
          ))}
        </div>
      <Modal day={selectedDay} onClose={handleCloseModal} />
        
      </section>
    </div>
  );
}

export default Navbar;
