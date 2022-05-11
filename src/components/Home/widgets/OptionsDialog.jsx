import { useEffect } from "react";
import { Link } from "react-router-dom"

const OptionsDialog = ({ selectedTab }) => {
    const stopPropagation = () => {
        //prevent dialog from losing focus
        document.querySelector(".navbar__optionsdialog").addEventListener('mouseup', (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
        })
    }

    useEffect(() => {
        stopPropagation();
    })

    return (
        <div className="navbar__optionsdialog">
            <div className="navbar__optionsdialog__wrapper">
                {selectedTab === 'chats' &&
                    <ul data-tab="chats">
                        <li>
                            <span className="navbar__optionsdialog__item">New group</span>
                        </li>
                        <li>
                            <span className="navbar__optionsdialog__item">New broadcast</span>
                        </li>
                        <li>
                            <span className="navbar__optionsdialog__item">Linked devices</span>
                        </li>
                        <li>
                            <span className="navbar__optionsdialog__item">Starred messages</span>
                        </li>
                        <Link to="/settings">
                            <li>
                                <span className="navbar__optionsdialog__item">Settings</span>
                            </li>
                        </Link>

                    </ul>
                }

                {selectedTab === 'status' &&
                    <ul data-tab="status">
                        <li>
                            <span className="navbar__optionsdialog__item">Status privacy</span>
                        </li>
                        <li>
                            <span className="navbar__optionsdialog__item">Settings</span>
                        </li>
                    </ul>
                }

                {selectedTab === 'calls' &&
                    <ul data-tab="calls">
                        <li>
                            <span className="navbar__optionsdialog__item">Clear call log</span>
                        </li>
                        <li>
                            <span className="navbar__optionsdialog__item">Settings</span>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default OptionsDialog