import React from 'react';
import './Modal.css'; // Add your modal styles

const Modal = ({ onClose, children }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="close-button" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
