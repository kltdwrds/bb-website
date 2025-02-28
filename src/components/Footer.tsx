// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Follow the herd: <a href="https://twitter.com/babybrigade">Twitter</a>
      </p>
      <button className="buy-button">Buy $BB</button>
    </footer>
  );
};

export default Footer;
