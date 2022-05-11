import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar = () => {
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }
    return (
        <nav role="navigation" className="settingsview__navbar">
            <div role="button" onClick={() => toHome()} className="settingsview__navbar__icon">
                <ArrowBackIcon />
            </div>
            <h3 className="settingsview__navbar__title">Settings</h3>
        </nav>
    )
}

export default Navbar