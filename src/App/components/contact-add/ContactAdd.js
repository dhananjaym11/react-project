import React from 'react';

import * as validations from '../../utility/validations';
import * as constants from '../../utility/constants';

class ContactAdd extends React.Component {
    state = {
        contact: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            status: ''
        },
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: ''
        },
        globalError: ''
    }

    componentDidUpdate() {
        if (this.props.contact && this.props.contact.id && this.props.contact.id !== this.state.contact.id) {
            this.setState({
                contact: this.props.contact
            })
        }
    }

    onChangeHandler = (e) => {
        const contact = { ...this.state.contact };
        const errors = { ...this.state.errors };
        contact[e.target.name] = e.target.value;
        errors[e.target.name] = '';
        if ((e.target.name === 'firstName' || e.target.name === 'lastName')
            && !(validations.validateName(e.target.value))) {
            errors[e.target.name] = constants.ERROR_NAME;
        }
        if (e.target.name === 'email' && !(validations.validateEmail(e.target.value))) {
            errors[e.target.name] = constants.ERROR_EMAIL;
        }
        if (e.target.name === 'mobile' && !(validations.validateMobile(e.target.value))) {
            errors[e.target.name] = constants.ERROR_MOBILE;
        }

        this.setState({
            contact,
            errors,
            globalError: ''
        })
    }

    onSubmitHandler = () => {
        const emptyData = Object.values(this.state.contact).filter(s => s === '');
        const isError = Object.values(this.state.errors).filter(e => e !== '');
        if (emptyData.length || isError.length !== 0) {
            this.setState({
                globalError: constants.ERROR_GLOBAL
            });
            return false;
        };
        this.setState({
            globalError: ''
        });
        this.props.onSubmitHandler(this.state.contact);
    }

    render() {
        const { contact, errors, globalError } = this.state;
        const isError = Object.values(this.state.errors).filter(e => e !== '');

        return (
            <form>
                <div className="row">
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={contact.firstName}
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={contact.lastName}
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name='email'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={contact.email}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Mobile phone number</label>
                        <input
                            type="text"
                            name='mobile'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={contact.mobile}
                        />
                        {errors.mobile && <p className="error">{errors.mobile}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Status</label>
                        <select
                            className="form-control"
                            name="status"
                            onChange={this.onChangeHandler}
                            value={contact.status}
                        >
                            <option value="">select</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                {
                    globalError && <p className="error">{globalError}</p>
                }
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.onSubmitHandler}
                        disabled={isError.length !== 0}
                    >Submit</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.props.onCancelHandler}
                    >Cancel</button>
                </div>
            </form>
        )
    }
}

export default ContactAdd;