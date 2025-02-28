// src/components/DeerAssets.tsx
import React from "react";
import DeerAsset from "./DeerAsset";

const deerData = [
  {
    name: "Marine Bambi",
    ticker: "$BAMBI",
    description: "A iconic deer trained for resilience in a fight for freedom!",
    image: "bambi.png",
    mintLink: "https://pump.fun/mint/bambi",
  },
  {
    name: "Air Force Rudolph",
    ticker: "$RUDY",
    description: "Guiding through blizzards and dodging Feds from 30,000 feet!",
    image: "rudolph.png",
    mintLink: "https://pump.fun/mint/rudy",
  },
  {
    name: "Army Bullwinkle",
    ticker: "$BULLY",
    description: "Stumbling through forests and battlefields to save Baby!",
    image: "bullwinkle.png",
    mintLink: "https://pump.fun/mint/bully",
  },
  {
    name: "Navy Sven",
    ticker: "$SVEN",
    description: "Steering the squad to ram the Feds and snag Baby back!",
    image: "sven.png",
    mintLink: "https://pump.fun/mint/sven",
  },
  {
    name: "Space Force Stag",
    ticker: "$STAG",
    description: "Outrunning hunters and orbiting galaxies for Baby’s rescue!",
    image: "stag.png",
    mintLink: "https://pump.fun/mint/stag",
  },
];

const DeerAssets: React.FC = () => {
  return (
    <section id="deer-assets" className="deer-assets">
      <h2 className="comic-neue-bold">The Brigade</h2>
      <div className="deer-assets-container">
        {deerData.map((deer) => (
          <DeerAsset key={deer.ticker} {...deer} />
        ))}
      </div>
    </section>
  );
};

export default DeerAssets;
