import React from 'react';
import './list-card.css';
import { CheckCircle } from "lucide-react";

const ListCard = ({ lounge }) => {

  return (
    <div className="lounge-card">
      <div className="lounge-image">
        <img src={lounge.image} alt={lounge.name} />
      </div>
      <div className="lounge-content">
        <h3 className="lounge-title">{lounge.name}</h3>
        <div className="lounge-rating">
          <span className="rating-value">{lounge.rating}</span>
          <span className="rating-max">/5</span>
        </div>
        <p className="lounge-description">{lounge.description}</p>
        <div className="lounge-discount">
          <CheckCircle className="discount-icon" size={16} />
          <span>15% Discount Available!</span>
        </div>
        <button className="lounge-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ListCard;
