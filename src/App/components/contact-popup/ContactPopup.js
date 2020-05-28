import React from 'react';

import './ContactPopup.scss';

const ContactPopup = ({ onToggleShow, onConfirmDelete }) => (
    <div className="popup-container">
        <div className="popup-overlay"></div>
        <div className="popup popup-delete-confirm">
            <button className="close-popup" title="Close" onClick={onToggleShow}>X</button>
            <div className="popup-delete-confirm-div">
                <p>Do you want delete this contact?</p>
                <div className="popup-btn-container">
                    <button type="button" className="popup-btn popup-btn-yes" onClick={onConfirmDelete}>Yes</button>
                    <button type="button" className="popup-btn popup-btn-no" onClick={onToggleShow}>No</button>
                </div>
            </div>
        </div>
    </div>
)

export default ContactPopup;