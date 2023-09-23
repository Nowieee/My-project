// EngineeringFormModal.js
import React from 'react';
import "./EngineeringFormModal.css";
import Engineering from './Engineering';

function EngineeringFormModal({ request, onClose, onFormSubmit }) {
  const handleSubmit = (data) => {
    onFormSubmit(data);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>
        <Engineering request={request} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default EngineeringFormModal;
