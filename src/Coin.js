import React from "react";

function Coin({ name, image, symbol, volume, price }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h3>{name}</h3>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
