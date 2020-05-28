import React from 'react';

import ContactItem from '../contact-item/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
    <div className="row">
        {contacts.map(contact => <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
        />)}
    </div>
)

export default ContactList;