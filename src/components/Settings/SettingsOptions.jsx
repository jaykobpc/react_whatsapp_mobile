import KeyIcon from '@mui/icons-material/Key';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FolderIcon from '@mui/icons-material/Folder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const SettingsOptions = () => {
    return (
        <section className="settingsview__optionslist">
            <div className="settingsview__optionscard">
                <div className="settingsview__optionscard__iconbox">
                    <KeyIcon />
                </div>
                <div className="settingsview__optionscard__textview">
                    <h3 className="settingsview__optionscard__textview__title">Account</h3>
                    <p className="settingsview__optionscard__textview__smtext">Privacy, security, change number</p>
                </div>
            </div>
            <div className="settingsview__optionscard">
                <div className="settingsview__optionscard__iconbox">
                    <MessageIcon />
                </div>
                <div className="settingsview__optionscard__textview">
                    <h3 className="settingsview__optionscard__textview__title">Chats</h3>
                    <p className="settingsview__optionscard__textview__smtext">Theme, wallpapers, chat history</p>
                </div>
            </div>
            <div className="settingsview__optionscard">
                <div className="settingsview__optionscard__iconbox">
                    <NotificationsIcon />
                </div>
                <div className="settingsview__optionscard__textview">
                    <h3 className="settingsview__optionscard__textview__title">Notifications</h3>
                    <p className="settingsview__optionscard__textview__smtext">Message, group &amp; call tones</p>
                </div>
            </div>
            <div className="settingsview__optionscard">
                <div className="settingsview__optionscard__iconbox">
                    <FolderIcon />
                </div>
                <div className="settingsview__optionscard__textview">
                    <h3 className="settingsview__optionscard__textview__title">Storage and data</h3>
                    <p className="settingsview__optionscard__textview__smtext">Network usage, auto download</p>
                </div>
            </div>
            <div className="settingsview__optionscard">
                <div className="settingsview__optionscard__iconbox">
                    <HelpOutlineIcon />
                </div>
                <div className="settingsview__optionscard__textview">
                    <h3 className="settingsview__optionscard__textview__title">Help</h3>
                    <p className="settingsview__optionscard__textview__smtext">Help center, contact us, privacy policy</p>
                </div>
            </div>
            <div className="settingsview__optionscard">
                <div className="settingsview__optionscard__iconbox">
                    <SupervisorAccountIcon />
                </div>
                <div className="settingsview__optionscard__textview">
                    <h3 className="settingsview__optionscard__textview__title">Invite a friend</h3>
                </div>
            </div>
        </section>
    )
}

export default SettingsOptions