import React from "react";

const Card = () => {
  return (
    <div>
      <h1>It's a card from Bootstrap</h1>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={'public/images/img1.jpeg'}
          className="card-img-top"
          alt="pic not available"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
