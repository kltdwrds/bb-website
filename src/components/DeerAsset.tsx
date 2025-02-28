// src/components/DeerAsset.tsx
import React from "react";

interface DeerAssetProps {
  name: string;
  ticker: string;
  description: string;
  image: string;
  mintLink: string;
}

const DeerAsset: React.FC<DeerAssetProps> = ({
  name,
  ticker,
  description,
  image,
  mintLink,
}) => {
  return (
    <div className="deer-asset" id={ticker.toLowerCase().replace("$", "")}>
      <img src={image} alt={name} />
      <h3 className="comic-neue-bold">{name}</h3>
      <p>{ticker}</p>
      <p>{description}</p>
      <a href={mintLink} target="_blank" rel="noopener noreferrer">
        <button className="mint-button">Mint Now!</button>
      </a>
    </div>
  );
};

export default DeerAsset;
