import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMissedIcon from '@mui/icons-material/CallMissed';

const Callscard = ({ callerImage, callerName, callAccepted, callDate, callType }) => {
    return (
        <div className='homeview__callcard'>
            <div className="homeview__callcard__imagebox">
                <img src={callerImage} draggable="false" alt={callerName} className="homeview__callcard__imagebox__img" />
            </div>
            <div className="homeview__callcard__contextview">
                <h3 className="homeview__callcard__contextview__title">{callerName}</h3>
                <div className="homeview__callcard__contextview__group">
                    <div className="homeview__callcard__contextview__callstatus">
                        {callAccepted === 1 && <CallReceivedIcon className="color-green" />}
                        {callAccepted === 0 && <CallMissedIcon className="color-red" />}
                    </div>
                    <p className="homeview__callcard__contextview__timestamp">{callDate}</p>
                </div>
            </div>
            <div className="homeview__callcard__calltype">
                <div className="homeview__callcard__calltype__icon">
                    {callType === 1 && <VideocamIcon />}
                    {callType === 0 && <CallIcon />}
                </div>
            </div>
        </div>
    )
}

export default Callscard