import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const MessageBox = () => {
    return (
        <footer className="chatview__messagebox">
            <div className="chatview__messagebox__wrapper">
                <div role="button" className="chatview__messagebox__iconbox">
                    <InsertEmoticonIcon />
                </div>
                <input type="text" placeholder="Message" className="chatview__messagebox__inputbox" />
                <div role="button" className="chatview__messagebox__iconbox">
                    <AttachFileIcon />
                </div>
                <div role="button" className="chatview__messagebox__iconbox">
                    <PhotoCameraIcon />
                </div>
                <div role="button" className="chatview__messagebox__iconbox">
                    <KeyboardVoiceIcon />
                </div>
            </div>
        </footer>
    )
}

export default MessageBox