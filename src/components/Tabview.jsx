import { useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

//Tab views
import Chats from './Home/Chats';
import Status from './Home/Status';
import Calls from './Home/Calls';

const Tabview = () => {
    const [activeTab, setActiveTab] = useState('chats');

    const toggleTab = (tabname) => {
        setActiveTab(tabname);
    }

    return (
        <section role="tab" className="tabview">
            <div role="navigation" className="tabview__header">
                <button className="tabview__header__button">
                    <PhotoCameraIcon />
                </button>
                <button onClick={() => toggleTab('chats')} className={`tabview__header__button ${activeTab  === 'chats' ? 'tab__highlight' : ''}`}>CHATS</button>
                <button onClick={() => toggleTab('status')} className={`tabview__header__button ${activeTab === 'status' ? 'tab__highlight' : ''}`}>STATUS</button>
                <button onClick={() => toggleTab('calls')} className={`tabview__header__button ${activeTab  === 'calls' ? 'tab__highlight' : ''}`}>CALLS</button>
            </div>
            <div className="tabview__container">
                {activeTab === 'chats' &&
                    <div className="tabview__container__tabitem">
                        <Chats />
                    </div>
                }
                {activeTab === 'status' &&
                    <div className="tabview__container__tabitem">
                        <Status />
                    </div>
                }
                {activeTab === 'calls' &&
                    <div className="tabview__container__tabitem">
                        <Calls />
                    </div>
                }
            </div>
        </section>
    )
}

export default Tabview