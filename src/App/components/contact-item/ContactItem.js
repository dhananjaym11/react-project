import React from 'react';
import { Link } from "react-router-dom";

const ContactItem = ({ contact, onDeleteContact }) => (
    <div className="col-lg-4 col-sm-6">
        <div className="contact-item">
            <div className="details-link">
                <span>
                    <span>First Name: </span>
                    <span>{contact.firstName}</span>
                </span>
                <span>
                    <span>Last Name: </span>
                    <span>{contact.lastName}</span>
                </span>
                <span>
                    <span>Email: </span>
                    <span>{contact.email}</span>
                </span>
                <span>
                    <span>Mobile: </span>
                    <span>{contact.mobile}</span>
                </span>
                <span>
                    <span>Status:</span>
                    <span>{contact.status}</span>
                </span>
            </div>

            <div className="list-links">
                <Link to={`/contacts/edit/${contact.id}`} className="list-link edit-link">
                    Edit
                </Link>
                <button className="list-link delete-link" onClick={() => onDeleteContact(contact.id)}>
                    Delete
                </button>
            </div>
        </div>
    </div>
)

export default ContactItem;