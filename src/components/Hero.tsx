// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="comic-neue-bold">Join the Brigade!</h1>
        <p>
          The government took Baby, but we’re taking her back—one $BB at a time.
        </p>
        <button className="buy-button">Buy $BB</button>
        <a href="#about">
          <button className="learn-more">What's this?</button>
        </a>
      </div>
      <div>
        <img src="logo.png" alt="Baby the Deer" />
      </div>
    </section>
  );
};

export default Hero;
