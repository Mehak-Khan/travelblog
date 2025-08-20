import React from 'react';

const renderSection = (title, items) => (
  <div className="modal-section">
    <h3 className="modal-section-title">{title}</h3>
    <ul className="modal-list">
      {items.map((item, index) => (
        <li key={index} className="modal-list-item">
          <strong className="modal-rec-title">{item.title}</strong>: <p>{item.description}</p>
          {item.image && (
            <img 
              src={item.image} 
              alt={item.title} 
              className="section-image mt-2 rounded-xl shadow-md"
            />
          )}
        </li>
      ))}
    </ul>
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
            {day.activities && day.activities.length > 0 && 
                renderSection("Activities", day.activities, day.activitiesImage)}
          </>
        )}
                  {(day.type === 'personal-stories' || day.type === 'tips') && (
          <>
            {renderSection("", day.details, day.accomodation)}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
