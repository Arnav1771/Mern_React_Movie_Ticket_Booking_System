// src/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, message }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;