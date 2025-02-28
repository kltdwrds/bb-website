// src/components/Description.tsx
import React from "react";

const Description: React.FC = () => {
  return (
    <section id="about" className="description">
      <h2 className="comic-neue-bold">Baby’s Story</h2>
      <p>
        Baby the deer was{" "}
        <a href="https://www.cbsnews.com/pittsburgh/news/deer-unlawful-possession-bullskin-township-fayette-county/">
          stolen from her guardian
        </a>{" "}
        by the government, just like our beloved{" "}
        <a href="https://pnutsol.com/">Peanut</a>...RIP. Join the brigade and
        raise awareness -- buy, mint, and share to save Baby!
      </p>
    </section>
  );
};

export default Description;
