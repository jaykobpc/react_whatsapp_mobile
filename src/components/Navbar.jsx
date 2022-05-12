import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OptionsDialog from './Home/widgets/OptionsDialog';
import { useState, useEffect } from 'react';

const Navbar = ({ activeTab }) => {
    const [dialogStatus, setDialogStatus] = useState(false)

    const toggleDialog = () => {
        dialogStatus === false ? setDialogStatus(true) : setDialogStatus(false);
    }

    const dialogFocusOut = () => {
        if (dialogStatus === true) {
            document.querySelector('.homeview').addEventListener('mouseup', (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                setDialogStatus(false);
            })
        }
    }

    useEffect(() => {
        dialogFocusOut();
    })

    return (
        <nav className="navbar no-select">
            <div className="navbar__container">
                <div className="navbar__titlebox">
                    <h3 className="navbar__titlebox__title">WhatsApp</h3>
                    <div className="navbar__titlebox__icongroup">
                        <div role="button" className="navbar__titlebox__icongroup__icon">
                            <SearchIcon />
                        </div>
                        <div onClick={() => toggleDialog()} role="button" className="navbar__titlebox__icongroup__icon">
                            <MoreVertIcon />
                        </div>
                    </div>
                    {dialogStatus && <OptionsDialog selectedTab={activeTab} />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar