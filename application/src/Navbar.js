import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class = "navbar">
    <div class="header">
    <div class="sides">
      <a href="#" class="logo">BLOG</a>
    </div>
    <div class="sides"> <a href="#" class="menu"> </a></div>
    <div class="info">
      <h1>TRAVEL? TRAVEL.</h1>
      <div class="meta">
        <a target="_b" class="author"></a>
        By <a target="_b">Mehak Khan</a>
      </div>
    </div>
  </div>
      <section class="content">
      <p>If you've made it thus far, it means you are a fellow travel fiend. Just like me! I have travelled to 15 countries solo across Asia, Europe and Africa. Through my travels, I have gained invaluable experience and have also made many mistakes that I am here to share with you, so you can too, see the world with your own eyes (and avoid getting scammed while at it). Who says travelling has to be expensive?</p>
        <p align="center"><a href="https://www.instagram.com/mehaks.living/?hl=en" class="btn insta" target="_b">Follow me on Instagram</a>       
        </p>
        <p align="center"><a href="https://www.instagram.com/mehaks.living/?hl=en" class="btn learn" target="_b">Learn more about my Travels</a>
        </p>
        <p align="center"><a href="https://www.instagram.com/mehaks.living/?hl=en" class="btn questions" target="_b">Have questions? Ask me!</a>
        </p>
      </section>
      </div>

  
  );
}

export default Navbar;
