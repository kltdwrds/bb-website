// src/components/NavHeader.tsx
import React from "react";

const NavHeader: React.FC = () => {
  return (
    <header className="nav-header">
      <a href="/" className="header">
        <div className="logo">
          <img src="logo.png" alt="Baby brigade Logo" />
          <span className="comic-neue-bold">Baby Brigade</span>
        </div>
      </a>
      <nav className="nav-links">
        <a className="buy" href="#about">
          <button className="buy-button">BUY $BB</button>
        </a>
        <a href="#deer-assets">THE BRIGADE</a>
      </nav>
    </header>
  );
};

export default NavHeader;
