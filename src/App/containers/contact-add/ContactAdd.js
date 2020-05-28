import React from 'react';
import { connect } from 'react-redux';

import './ContactAdd.scss';
import * as actions from '../../core/actions';
import ContactAdd from '../../components/contact-add/ContactAdd';

class ContactAddContainer extends React.Component {
    state = {
        contact: {}
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        if (this.props.contacts && this.props.contacts.length) {
            const contact = this.props.contacts.find(contact => contact.id === id);
            this.setState({
                contact: contact
            })
        }
    }

    onSubmitHandler = (contact) => {
        let contacts = null;
        const orgContacts = this.props.contacts
        if (contact.id) {
            contacts = orgContacts.map(s => s.id === contact.id ? ({ ...contact }) : s);
        } else {
            const lastMemberId = orgContacts.length ? orgContacts[orgContacts.length - 1].id : 0;
            const updatedContact = {
                id: lastMemberId + 1,
                ...contact
            }
            contacts = [...orgContacts, updatedContact];
        }
        this.props.updateContacts(contacts);
        this.props.history.push('/contacts');
    }

    onCancelHandler = () => {
        this.props.history.push('/contacts');
    }

    render() {
        return (
            <div className="contact-add">
                <h2>Add Contact</h2>
                <ContactAdd
                    contact={this.state.contact}
                    onSubmitHandler={this.onSubmitHandler}
                    onCancelHandler={this.onCancelHandler}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ contacts: state.contactReducer.contacts })

const mapDispatchToProps = (dispatch) => ({
    updateContacts: (contacts) => {
        dispatch(actions.updateContacts(contacts))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactAddContainer);