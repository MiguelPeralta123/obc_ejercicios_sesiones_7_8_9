import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Contact from '../../models/contact.class'

export const ContactComponent = ({contact, changeStatus, deleteContact}) => {

    const changeStatusIcon = () => {
        return contact.connected ? 
        <i onClick={() => changeStatus(contact)} className='bi-toggle-on' style={{color:'green', cursor:'pointer'}}></i> : 
        <i onClick={() => changeStatus(contact)} className='bi-toggle-off' style={{color:'gray', cursor:'pointer'}}></i>
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.group}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>
                {changeStatusIcon()}
                <i onClick={() => deleteContact(contact)} className='bi-trash' style={{color:'tomato', cursor:'pointer'}}></i>
            </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    changeStatus: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
};
