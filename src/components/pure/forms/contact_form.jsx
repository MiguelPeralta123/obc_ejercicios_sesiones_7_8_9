import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Contact from '../../../models/contact.class';
import { Groups } from '../../../models/groups.enum';

export const ContactForm = ({addContact}) => {

    const nameRef = useRef('')
    const groupRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')

    const addNewContact = (e) => {
        e.preventDefault()
        let contact = new Contact(nameRef.current.value, groupRef.current.value, phoneRef.current.value, emailRef.current.value, false)
        addContact(contact)
        nameRef.current.value = ''
        groupRef.current.value = 'Not selected'
        phoneRef.current.value = ''
        emailRef.current.value = ''
    }

    return (
        <form onSubmit={addNewContact} className='p-4'>
            <label>Name:</label>
            <input type='text' ref={nameRef} className='form-control mb-2' required autoFocus></input>
            <label>Group:</label>
            <select ref={groupRef} className='form-control mb-2' required>
                <option value={Groups.Not_selected}>Not selected</option>
                <option value={Groups.Family}>Family</option>
                <option value={Groups.Friends}>Friends</option>
                <option value={Groups.Work}>Work</option>
            </select>
            <label>Phone number:</label>
            <input type='tel' ref={phoneRef} className='form-control mb-2' maxLength={10} required></input>
            <label>Email:</label>
            <input type='email' ref={emailRef} className='form-control mb-4' required></input>
            <button type='submit' className='btn btn-primary form-control'>Save</button>
        </form>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};
