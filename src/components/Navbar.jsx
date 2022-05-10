import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__titlebox">
                    <h3 className="navbar__titlebox__title">WhatsApp</h3>
                    <div className="navbar__titlebox__icongroup">
                        <div role="button" className="navbar__titlebox__icongroup__icon">
                            <SearchIcon />
                        </div>
                        <div role="button" className="navbar__titlebox__icongroup__icon">
                            <MoreVertIcon />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar