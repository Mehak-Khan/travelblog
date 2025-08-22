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
          'Lisbon was my next solo adventure, and it welcomed me with warmth, color, and charm. After Barcelona’s excitement, I wanted a city that felt slower, more contemplative, yet full of life—and Lisbon delivered.',
          'From wandering the vibrant streets of Alfama to soaking in panoramic views at Miradouro da Senhora do Monte, every moment was a mix of discovery and delight. I loved getting lost in its rhythms: sipping Ginjinha from a tiny chocolate cup, exploring Sintra’s fairytale palaces, and wandering past the iconic tiled buildings.',
          'Lisbon reminded me why I love solo travel,  the freedom to follow curiosity, embrace the unexpected, and savor every small, joyful moment. It’s a city that lingers in your heart long after you leave.',
          'This journey strengthened my love for exploration and showed me the beauty of stepping out of my comfort zone. Lisbon will always hold a special place in my heart, adding another unforgettable chapter to my solo travel adventures.'
        ],  
        image: "../../images/lisbon/overview.jpg", 
      },
        { id: 2, title: 'Recommendations', 
        summary: 'Today we visited the iconic Sagrada Familia...', 
        details: ['Detailed information about Day 2'], 
        type: "recommendations",
        image: "../../images/lisbon/recs.jpg",
        accomodation: [
          {
            title: "You're Not a F****** Tourist",
            description: "Staying at You're Not a F****** Tourist in Lisbon was an absolute treat. I stayed in a mixed dorm with cozy privacy curtains that made it feel a bit more personal. The social vibe was incredible—bar crawls, game nights, and plenty of chances to meet fellow travelers made it easy to make new friends. What really stood out was the little personalized letter they gave me recommending places for my next destination, based on where I told them I was headed next—it was such a thoughtful touch! The hostel was clean, well-organized, and perfectly located for exploring the city. Highly recommend it for solo travelers looking for a mix of comfort, fun, and personal touches."
          }
        ],
        placesToSee: [
          {
            title: 'Pink Street',
            description: 'Once the red-light district of Lisbon, Pink Street has transformed into one of the city’s trendiest nightlife spots. The street itself is literally painted pink, making it a quirky and fun place to stroll during the day and a lively area at night. It’s filled with bars, cafés, and music — perfect for experiencing Lisbon’s energetic vibe. Even if you’re not here to party, it’s worth visiting for the atmosphere and unique look.',
            image: "../../images/lisbon/pinkstreetU.jpg"
          },
          {
            title: 'Belém Tower',
            description: 'The Belém Tower is one of Lisbon’s most iconic landmarks and a UNESCO World Heritage Site. Built in the 16th century, it once served as both a fortress and a ceremonial gateway to the city. Its intricate Manueline architecture, combined with its riverside location, makes it one of the most picturesque spots in Lisbon. I loved walking around the area, especially during sunset when the tower glows beautifully against the Tagus River.',
            image: "../../images/lisbon/belemU.jpg"
          },
          {
            title: 'LX Factory',
            description: 'LX Factory is a creative hub set inside a former industrial complex, now buzzing with cafés, restaurants, shops, and street art. It’s the perfect spot to explore on a lazy afternoon, especially if you enjoy discovering unique spaces and artsy vibes. From quirky bookstores to rooftop bars with great views, LX Factory feels like its own little world inside Lisbon. A must-visit for anyone who loves creativity, design, and good food.',
            image: "../../images/lisbon/lxfactoryU.jpg"
          },
          {
            title: 'Miradouro da Senhora do Monte',
            description: 'Lisbon is known for its many viewpoints, and Miradouro da Senhora do Monte is one of the best. From here, you can see sweeping views of the entire city, including the castle, the river, and the red rooftops that make Lisbon so charming. It’s especially magical at sunset when the city is bathed in golden light. I found it to be a peaceful spot away from the busier viewpoints, perfect for soaking in the beauty of Lisbon from above.',
            image: "../../images/lisbon/miradoraU.jpg"
          },
          {
            title: 'Arco da Rua Augusta',
            description: 'At the end of Lisbon’s grand Praça do Comércio stands the Arco da Rua Augusta, a triumphal arch that leads into the city’s main shopping street. You can actually go up to the top of the arch for a stunning view of the square, the river, and the bustling streets below. Walking through the arch felt like stepping right into the heart of Lisbon, full of energy, history, and charm.',
            image: "../../images/lisbon/augustaU.jpg"
          },
          {
            title: 'MAAT (Museum of Art, Architecture and Technology)',
            description: 'MAAT is a modern museum with striking architecture and contemporary exhibits. One of its highlights is the rooftop, which offers incredible panoramic views of the Tagus River and the city of Lisbon. It’s a fantastic spot to relax, take photos, and enjoy the unique blend of art, design, and scenery all in one place.',
            image: "../../images/lisbon/maat.jpg"
          },
          {
            title: 'Day Trip to Sintra',
            description: 'I joined a hostel tour that made visiting Sintra super easy, with transport included and a great group vibe. Our first stop was the colorful Pena Palace, perched high on a hill and looking like something straight out of a fairytale. The bright yellow and red towers, the whimsical details, and the sweeping views from the terraces made it unforgettable. After exploring the palace, we headed to Quinta da Regaleira, which felt mysterious and enchanting with its gardens, hidden tunnels, and the famous Initiation Well — a spiraling staircase that descends deep into the earth like something out of a storybook. To end the day, we drove out to Cabo da Roca, the westernmost point of mainland Europe. Standing at the edge of the cliffs, looking out over the Atlantic Ocean, was an incredible and humbling experience — the perfect way to wrap up a magical day trip.',
            image: "../../images/lisbon/sintra.jpg"
          } 
          ],        
        foodToTry: [
          {
            title: 'Pastel de Nata',
            description: 'You simply cannot visit Lisbon without trying a pastel de nata, the city’s famous custard tart. The creamy filling, lightly caramelized on top, paired with the flaky, buttery pastry, makes it absolutely irresistible. My favorite was from Pastéis de Belém, where they’ve been baking them since 1837, but honestly, you can find delicious versions in cafés all around the city. Best enjoyed warm, sprinkled with a little cinnamon and powdered sugar!',
            image: "../../images/lisbon/pastel.jpg"
          },
          {
            title: 'Ginjinha in a Chocolate Cup',
            description: 'Lisbon has a sweet little tradition called ginjinha (or simply ginja), a cherry liqueur that’s often served in tiny edible chocolate cups. The drink itself is rich and fruity, and sipping it from a chocolate shot glass makes the experience even more fun and indulgent. I tried it at a small bar in the city center, and it felt like the perfect mix of quirky and delicious. It’s one of those unique Lisbon experiences you definitely shouldn’t miss!',
            image: "../../images/lisbon/ginjinha.jpg"
          }
        ],
      },
      
        { id: 3, title: 'Personal Stories', 
        summary: '', 
        type: 'personal-stories',
        image: "../../images/lisbon/personal.jpg",
        details: 
        [
          {
            title: 'Drinks and Sunset at LX Factory',
            description: 'While in Lisbon, I connected with a fellow traveler through the Hostelworld app chat. We decided to meet up for drinks at LX Factory, and I had one of the best mango sangrias I’ve ever tasted! Afterward, we headed to the roof of a nearby mall to watch the sunset and ended up playing card games while enjoying the view. It was such a fun and relaxed evening, and I loved how spontaneous travel can lead to these amazing experiences and new friendships.'
          }
        ]
      },
        { id: 4, 
          title: 'Practical Tips', 
          summary: 'Today we visited the iconic Sagrada Familia...',
          type: 'tips',
          image: "../../images/lisbon/tips.jpg",
          details: [
            {
              title: 'Wear comfy shoes!',
              description: 'Lisbon is full of hills and cobblestone streets, so bring shoes you can walk in all day. My feet were grateful after exploring Alfama and Bairro Alto!'
            },
            {
              title: 'Uber is super cheap!',
              description: 'Getting around Lisbon by Uber is very affordable compared to many other European cities. I used it to hop between neighborhoods and saved both time and energy!'
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
            <img src={"../../images/lisbon/arcoderua.jpg"} alt="Travel Image 1" />
            <p className="legend">Arco da Rua Augusta</p>
          </div>
          <div>
            <img src={"../../images/lisbon/belem.jpg"} alt="Travel Image 2" />
            <p className="legend">Belém Tower</p>
          </div>
          <div>
            <img src={"../../images/lisbon/lxfactory.jpg"} alt="Travel Image 3" />
            <p className="legend">LX Factory</p>
          </div>
          <div>
            <img src={"../../images/lisbon/pinkstreet.jpg"} alt="Travel Image 4" />
            <p className="legend">Pink Street</p>
          </div>
          <div>
            <img src={"../../images/lisbon/view.jpg"} alt="Travel Image 5" />
            <p className="legend">Miradoura da Senhora do Monte</p>
          </div>
          <div>
            <img src={"../../images/lisbon/cabo.jpg"} alt="Travel Image 5" />
            <p className="legend">Cabo da Roca</p>
          </div>
          <div>
            <img src={"../../images/lisbon/pena.jpg"} alt="Travel Image 5" />
            <p className="legend">Pena Palace</p>
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
          <h1>LISBON, PORTUGAL</h1>
        </div>
      </div>
      <section className="content">
        <p class="title-blog barcelona">4 days in Lisbon - The City of Seven Hills.</p>
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
