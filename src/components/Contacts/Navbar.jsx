import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar = () => {

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }

    return (
        <nav className="contactsview__navbar">
            <div role="button" onClick={() => toHome()} className="contactsview__navbar__iconbox">
                <ArrowBackIcon />
            </div>
            <div className="contactsview__navbar__textview">
                <h3 className="contactsview__navbar__textview__title">Select contact</h3>
                <p className="contactsview__navbar__textview__smtitle">10 contacts</p>
            </div>
            <div className="contactsview__navbar__icongroup">
                <div role="button" className="contactsview__navbar__icongroup__iconbox">
                    <SearchIcon />
                </div>
                <div role="button" className="contactsview__navbar__icongroup__iconbox">
                    <MoreVertIcon />
                </div>
            </div>
        </nav>
    )
}

export default Navbar