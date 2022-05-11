import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }

    return (
        <nav role="navigation" className="chatview__navbar">
            <div role="button" onClick={() => toHome()} className="chatview__navbar__iconbox">
                <ArrowBackIcon />
            </div>
            <div className="chatview__navbar__imagebox">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" draggable="false" alt="Profile" className="chatview__navbar__imagebox__img" />
            </div>
            <div className="chatview__navbar__textview">
                <h3 className="chatview__navbar__textview__title">Linda Schulz</h3>
                <p className="chatview__navbar__textview__smtitle">Online</p>
            </div>
            <div className="chatview__navbar__icongroup">
                <div role="button" className="chatview__navbar__icongroup__iconbox">
                    <VideocamIcon />
                </div>
                <div role="button" className="chatview__navbar__icongroup__iconbox">
                    <CallIcon />
                </div>
                <div role="button" className="chatview__navbar__icongroup__iconbox">
                    <MoreVertIcon />
                </div>
            </div>
        </nav>
    )
}

export default Navbar