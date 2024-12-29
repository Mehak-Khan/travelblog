import React from 'react';

const renderSection = (title, items, image) => (
  <div className="modal-section">
    <h3 className="modal-section-title">{title}</h3>
    <ul className="modal-list">
      {items.map((item, index) => (
        <li key={index} className="modal-list-item">
          <strong className = "modal-rec-title">{item.title}</strong>: {item.description}
        </li>
      ))}
    </ul>
    {/* {image && <img src={image} alt={title} className="section-image" />} */}
  </div>
);

const Modal = ({ day, onClose }) => {
  if (!day) return null;

  return (
    <div className="modal open">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{day.title}</h2>
        {day.type === "overview" && <ul className="modal-list">
            {Array.isArray(day.details) && day.details.map((item, index) => (
              <li key={index} className="modal-list-item">{item}</li>
            ))}
          </ul>}
          {day.type === 'recommendations' && (
          <>
            {renderSection("Accomodation", day.accomodation, day.accomodation)}
            {renderSection("Places to See", day.placesToSee, day.placesImage)}
            {renderSection("Food to Try", day.foodToTry, day.foodImage)}
            {renderSection("Activities", day.activities, day.activitiesImage)}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
