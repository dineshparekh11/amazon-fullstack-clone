import React from 'react';
import './Hero.css';
function Hero() {
  return (
    
    <div className="hero">
        <div class="hero-section">
            <img src="./assets/heroimg2.jpg" alt="" class="slide"/>
            <img src="./assets/heroimg2.jpg" alt="" class="slide"/>
            <img src="./assets/heroimg3.jpg" alt="" class="slide"/>
            <img src="./assets/heroimg4.jpg" alt="" class="slide"/>
            <img src="./assets/heroimg5.jpg" alt="" class="slide"/>
            <img src="./assets/heroimg6.jpg" alt="" class="slide"/>    
    </div>
    <div class="btn">
        <button id="prv-btn" onclick="goPrev()"><i class="fa-solid fa-chevron-left"></i></button>
        <button id="nxt-btn" onclick="goNext()"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    </div>
  )
}

export default Hero;