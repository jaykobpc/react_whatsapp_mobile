import { Link } from 'react-router-dom';

const Chatcard = ({ cardImage, userName, timeStamp, messageContext, unreadCount }) => {
    return (
        <Link draggable="false" to="/chat" className="homeview__chatcard">
            <div className="homeview__chatcard__imagebox">
                <img src={cardImage} alt={userName} draggable="false" className="homeview__chatcard__imagebox__img" />
            </div>
            <div className="homeview__chatcard__textview">
                <div className="homeview__chatcard__metagroup">
                    <h3 className={`homeview__chatcard__metagroup__title ${unreadCount > 0 ? 'fw-600' : ''}`}>{userName}</h3>
                    <p className="homeview__chatcard__metagroup__timestamp">{timeStamp}</p>
                </div>
                <div className="homeview__chatcard__contextgroup">
                    <p className="homeview__chatcard__contextgroup__text">{messageContext}</p>
                    {unreadCount !== 0 && <span className="homeview__chatcard__contextgroup__counter">{unreadCount}</span>}
                </div>
            </div>
        </Link>
    )
}

export default Chatcard