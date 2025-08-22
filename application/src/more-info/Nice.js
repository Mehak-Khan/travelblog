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
          "Nice for me was all about finally seeing those famous Gatorade-blue waters—and they definitely did not disappoint! Though, I will admit, the sea might look a touch bluer on social media than in real life, it was still absolutely stunning in person.",
          "The town itself had a really relaxed vibe, perfect for slowing down and just enjoying the moment. Spending time at the beach was fun, and the mix of pebbly shorelines with that turquoise water made for such a unique scene.",
          "That said, I only actually spent one full day exploring Nice itself. The other two days were dedicated to day trips—one to glamorous Monaco, and another to the charming towns of Èze and Villefranche-sur-Mer. These quick escapes added so much variety to the trip and made the Côte d’Azur experience even richer.",
          "Overall, Nice was a perfect base for exploring the French Riviera. Between the chilled seaside atmosphere, the postcard-worthy viewpoints, and easy access to nearby gems, it was the ideal 3-day getaway."
        ],  
        image: "../../images/nice/oldtown.jpg", 
      },
        { id: 2, title: 'Recommendations', 
        summary: 'Today we visited the iconic Sagrada Familia...', 
        details: ['Detailed information about Day 2'], 
        type: "recommendations",
        image: "../../images/nice/food.jpg",
        accomodation: [
          {
            title: "Baccarat Hostel",
            description: "I didn’t have the best experience staying at Baccarat Hostel in Nice. The bathroom lock didn’t work properly—at one point, someone even walked in on me while I was showering, which was incredibly uncomfortable. The reception staff also weren’t very friendly, and I’m fairly certain there was even a curfew around 3 AM, which felt restrictive for a hostel. Overall, I wouldn’t recommend it based on my experience."
          }
        ],
        placesToSee: [
          {
            title: "Old Nice (Vieux Nice)",
            description: "Wandering through the narrow, colorful streets of Old Nice felt like stepping back in time. The pastel buildings, lively cafés, and little shops made it the most charming part of the city for me. It’s the perfect place to grab some gelato and just get lost in the alleys.",
            image: "../../images/nice/oldtown.jpg"
          },
          {
            title: "Cascade du Château (Castle Hill Waterfall)",
            description: "This man-made waterfall on Castle Hill was such a refreshing stop. The viewpoint nearby gave me one of the best views of Nice, overlooking the city, Promenade des Anglais, and sparkling coastline. A short climb, but absolutely worth it!",
            image: "../../images/nice/waterfall.jpg"
            },
          {
            title: "Promenade des Anglais Beach",
            description: "I came to Nice to finally see those famous turquoise waters, and the beach along the Promenade des Anglais did not disappoint. While the water might look even bluer on social media, it was still stunning, and spending time here sunbathing and soaking up the vibe of the Riviera was amazing.",
            image: "../../images/nice/viewpointU.jpeg"
          },
          {
            title: "Eze Village",
            description: "I took a bus from Nice to Eze, and while it was very crowded, the trip was surprisingly easy. Going early in the morning helps avoid the worst of the crowds. The village itself felt straight out of a fairy tale, with winding stone streets, little art shops, and breathtaking views of the French Riviera from the Jardin Exotique. Easily one of my favorite parts of the trip.",
            image: "../../images/nice/eze.jpg"
          },
          {
            title: "Villefranche-sur-Mer",
            description: "I hopped on another bus to Villefranche-sur-Mer, and funny enough, it was so packed I ended up standing right at the front next to the bus driver! Somehow that made the ride one of the coolest experiences, with an incredible view going up the hillside. The village itself was colorful, laid-back, and less crowded than Nice. Sitting by the harbor and watching boats go by was so peaceful.",
            image: "../../images/nice/surmur.jpg"
          },
          {
            title: "Monaco Day Trip",
            description: "Monaco is insane in the best way. It is a quick train ride away from Nice. You can literally walk the entire country in a single day trip — perfect for bragging rights: “I walked a whole country!” 😄 The cars are unreal, and we even spotted famous tennis players Stefanos Tsitsipas and Paula Badosa driving around. Between the luxury vibes, Monte Carlo Casino, and the royal palace, it felt like stepping into another world.",
            image: "../../images/nice/monaco2.jpg"
          }
        ],        
        foodToTry: [
          {
            title: "Le Kawa – Coffee & Brunch",
            description: "I stopped by Le Kawa right before hopping on the train to Monaco, and it was the perfect little pit stop. I had one of the best mochas of my life there—rich, perfectly balanced, and so satisfying. I also tried a breakfast option whose name I unfortunately forgot, but it was incredible (you can see it in the photo below!). The café was cozy, the staff were friendly, and it was conveniently close to the train station—perfect for fueling up before a day trip.",
            image:"../../images/nice/food.jpg"
          },
          {
            title: "Bakery Treats",
            description: "No trip to Nice is complete without visiting a local bakery. From really any bakery, the croissants are to die for. I’m still thinking about them! Flaky, buttery, and perfectly golden, they make for a simple yet unforgettable French breakfast or snack while wandering the streets.",
            image: "../../images/nice/croissants.jpg"
          }
        ],
        activities: [
          {
            title: "Parasailing with Superfly",
            description: "On my last day in Nice, I spontaneously decided to go parasailing along the French Riviera with a company called Superfly and wow, it was absolutely incredible! The view of the coastline and the feeling of flying above it all was unforgettable. Definitely one of the highlights of my trip, and such a thrilling way to see Nice from a completely different perspective.",
            image: "../../images/nice/parasailing.jpg"
          }
        ]
      },
      
        { id: 3, title: 'Personal Stories', 
        summary: '', 
        type: 'personal-stories',
        image: "../../images/nice/wine.jpg",
        details: 
        [
          {
            title: "Meeting Friends on the Hostel Pub Crawl",
            description: "I met two amazing girls during a hostel pub crawl in Nice, and we hit it off so well that it felt like we’d known each other forever. We spent the next couple of days exploring together, and even our Uber driver commented on how close we seemed, joking that we must have been friends for years. It was such a fun, spontaneous experience and a great reminder of how travel can create instant friendships in the most unexpected ways."
          }
        ]
      },
        { id: 4, 
          title: 'Practical Tips', 
          summary: 'Today we visited the iconic Sagrada Familia...',
          type: 'tips',
          image: "../../images/nice/eze2.jpg",
          details: [
            {
              title: "Wear Sunscreen!",
              description: "It can get really hot in Nice, especially on the beach or while walking around town. Don’t forget your sunscreen—you’ll thank yourself later!"
            },
            {
              title: "Prepare for Pebbly Beaches",
              description: "The beaches in Nice are pebbly, and walking on them barefoot can seriously hurt - trust me, I learned the hard way! If you have water shoes or sturdy sandals, bring them. If not, just brace yourself for a slightly painful but totally worth-it experience!"
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
            <img src={"../../images/nice/ezec.jpg"} alt="Travel Image 2" />
            <p className="legend">Éze</p>
          </div>
          <div>
            <img src={"../../images/Nice/CascadeduChâteau.jpg"} alt="Travel Image 1" />
            <p className="legend">Cascade du Château</p>
          </div>
          <div>
            <img src={"../../images/nice/oldtownC.jpg"} alt="Travel Image 3" />
            <p className="legend">Old Nice</p>
          </div>
          <div>
            <img src={"../../images/nice/surmurC.jpg"} alt="Travel Image 4" />
            <p className="legend">Villefranche-sur-Mer</p>
          </div>
          <div>
            <img src={"../../images/nice/viewpoint.jpg"} alt="Travel Image 5" />
            <p className="legend">Belvédère du Château</p>
          </div>
          <div>
            <img src={"../../images/nice/monaco1C.jpg"} alt="Travel Image 5" />
            <p className="legend">Monaco</p>
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
          <h1>NICE, FRANCE</h1>
        </div>
      </div>
      <section className="content">
        <p class="title-blog barcelona">3 days in Nice - My French Riviera Escape.</p>
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
