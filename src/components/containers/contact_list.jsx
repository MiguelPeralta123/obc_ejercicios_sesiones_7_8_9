import React, { useState } from 'react';
import { ContactComponent } from '../pure/contact';
import { ContactForm } from '../pure/forms/contact_form'

export const ContactListComponent = () => {

    const [contacts, setContacts] = useState([])

    const changeStatus = (contact) => {
        let index = contacts.indexOf(contact)
        let tempContacts = [...contacts]
        tempContacts[index].connected = !tempContacts[index].connected
        setContacts(tempContacts)
    }

    const deleteContact = (contact) => {
        let index = contacts.indexOf(contact)
        let tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    const addContact = (contact) => {
        let tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    return (
        <div className='card bg-light mt-3 mb-3'>
            <p className='card-header'>Contact list</p>
            <table className='card-body'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Connected</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => <ContactComponent key={index} contact={contact} changeStatus={changeStatus} deleteContact={deleteContact}></ContactComponent>)}
                </tbody>
            </table>
            <hr />
            <ContactForm addContact={addContact}></ContactForm>
        </div>
    );
};
