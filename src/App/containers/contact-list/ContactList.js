import React from 'react';
import { connect } from 'react-redux';

import './ContactList.scss';
import { ENV } from "../../core/constants";
import * as actions from '../../core/actions';
import ContactList from '../../components/contact-list/ContactList';
import ContactPopup from '../../components/contact-popup/ContactPopup';
import contactervice from '../../core/services/contact.service';

class ContactListContainer extends React.Component {
    state = {
        isShow: false,
        deleteId: null
    }

    componentDidMount() {
        this.props.getContacts();
    }

    onAddHandler = () => {
        this.props.history.push('/contacts/add');
    }

    onDeleteContact = (id) => {
        this.onToggleShow(id);
    }

    onConfirmDelete = () => {
        const { deleteId } = this.state;
        fetch(ENV + 'contacts/' + deleteId + '.json', {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // this.props.updateContacts(contacts);
            })
            .catch(error => console.log(error));

        const contacts = this.props.contacts.filter(contact => contact.id !== deleteId)
        this.props.updateContacts(contacts);
        this.onToggleShow();
    }

    onToggleShow = (id) => {
        this.setState(prevState => ({ isShow: !prevState.isShow, deleteId: id }));
    }

    render() {
        return (
            <div className="contact-list">
                <h2 className="clearfix">
                    Contact List
                    <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={this.onAddHandler}
                    >Add Contact</button>
                </h2>
                {this.props.contacts.length ?
                    <div>
                        <ContactList
                            contacts={this.props.contacts}
                            onDeleteContact={this.onDeleteContact}
                        />
                        {this.state.isShow &&
                            <ContactPopup
                                onToggleShow={this.onToggleShow}
                                onConfirmDelete={this.onConfirmDelete}
                            />}
                    </div> :
                    <p style={{ textAlign: 'center', marginTop: 50 }}> No data found.</p >
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => ({ contacts: state.contactReducer.contacts });

const mapDispatchToProps = (dispatch) => ({
    updateContacts: (contacts) => {
        dispatch(actions.updateContacts(contacts))
    },
    getContacts: () => dispatch(contactervice.getContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer);