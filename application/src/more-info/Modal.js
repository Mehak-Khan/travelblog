import React from 'react';

const Modal = ({ day, onClose }) => {
  if (!day) return null;

  return (
    <div className="modal open">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{day.title}</h2>
        <p>{day.details}</p>
      </div>
    </div>
  );
};

export default Modal;
