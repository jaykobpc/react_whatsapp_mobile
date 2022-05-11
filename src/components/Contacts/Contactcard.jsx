import { Link } from 'react-router-dom';

const Contactcard = ({ contactImage, contactName, contactAbout }) => {
    return (
        <Link to="/chat" className="contactsview__contactitem">
            <div className="contactsview__contactitem__imagebox">
                <img src={contactImage} draggable="false" alt="Profile" className="contactsview__contactitem__imagebox__img" />
            </div>
            <div className="contactsview__contactitem__textview">
                <h3 className="contactsview__contactitem__textview__title">{contactName}</h3>
                {contactAbout !== '' && <p className="contactsview__contactitem__textview__smtitle">{contactAbout}</p>}
            </div>
        </Link>
    )
}

export default Contactcard