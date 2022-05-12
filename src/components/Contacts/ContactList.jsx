import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Contactcard from "./Contactcard"
import { useState } from 'react';

const ContactList = () => {
    const [contactList] = useState([
        {
            contactImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            contactName: 'Linda Schulz',
            contactAbout: 'Hello there I\'m using WhatsApp',
        },
        {
            contactImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            contactName: 'Natasha Whitman',
            contactAbout: 'The sun and the moon',
        },
        {
            contactImage: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            contactName: 'Andy Musk',
            contactAbout: 'Built for power',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            contactName: '://The Code Gang',
            contactAbout: 'Everyday is a new day..',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            contactName: 'Mongoose Webber',
            contactAbout: 'In the cloud',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            contactName: 'Andrew BoozeMan',
            contactAbout: '....',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1623607915241-a3151d59a9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            contactName: 'Champions League',
            contactAbout: 'Available',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
            contactName: 'Fawaz Anwar',
            contactAbout: 'At the movies',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            contactName: 'Susan Monaco',
            contactAbout: 'Busy',

        },
        {
            contactImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            contactName: 'Sheila netz',
            contactAbout: 'Code for life',

        },
    ]);
    return (
        <section className="contactsview__listview">
            <div className="contactsview__contactcard__linkbox">
                <div role="button" className="contactsview__contactcard__linkbox__icon">
                    <SupervisorAccountIcon />
                </div>
                <h3 className="contactsview__contactcard__linkbox__text">New group</h3>
            </div>
            <div className="contactsview__contactcard__linkbox">
                <div role="button" className="contactsview__contactcard__linkbox__icon">
                    <PersonAddIcon />
                </div>
                <h3 className="contactsview__contactcard__linkbox__text">New contact</h3>
                <div role="button" className="contactsview__contactcard__linkbox__tabicon">
                    <QrCodeIcon />
                </div>
            </div>
            {contactList.map((contact, index) => {
                return (
                    <Contactcard
                        key={index}
                        contactImage={contact.contactImage}
                        contactName={contact.contactName}
                        contactAbout={contact.contactAbout}
                    />
                )
            })}
        </section>
    )
}

export default ContactList