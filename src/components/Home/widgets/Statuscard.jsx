import AddIcon from '@mui/icons-material/Add';

const Statuscard = ({ statusImage, pendingStatus, isOwner, statusUser, statusTimeStamp }) => {
    return (
        <div className="homeview__statuscard">
            <div className="homeview__statuscard__imagebox">
                <div className={`homeview__statuscard__imagebox__wrapper ${pendingStatus === 1 ? 'pending-border' : ''}`}>
                    <img src={statusImage} alt={statusUser} className="homeview__statuscard__imagebox__img" />
                    {isOwner === 1 &&
                        <div className="homeview__statuscard__imagebox__iconadd">
                            <AddIcon />
                        </div>
                    }
                </div>
            </div>
            <div className="homeview__statuscard__textview">
                <h4 className="homeview__statuscard__textview__title">{statusUser}</h4>
                <p className="homeview__statuscard__textview__timestamp">{statusTimeStamp}</p>
            </div>
        </div>
    )
}

export default Statuscard