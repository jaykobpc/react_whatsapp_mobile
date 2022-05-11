import { useState } from "react"
import Navbar from "../components/Navbar"
import Tabview from "../components/Tabview"

const Home = () => {
    let [currentTab, setSelectedTab] = useState('chats');

    const updateSelectedTab = (tabname) => {
        setSelectedTab(tabname);
    }

    return (
        <div className="homeview">
            <Navbar activeTab={currentTab} />
            <Tabview updateTab={updateSelectedTab} />
        </div>
    )
}

export default Home