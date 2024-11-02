import React from 'react';

const DayCard = ({ day, onClick }) => {
  return (
    <div className="day-card" onClick={onClick}>
      <div className="card-image">
        <img src={day.image} alt={day.title} />
      </div>
      <div className="card-title">
        <h2>{day.title}</h2>
      </div>
    </div>
  );
};

export default DayCard;
