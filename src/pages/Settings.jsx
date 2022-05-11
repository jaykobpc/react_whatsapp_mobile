import Navbar from "../components/Settings/Navbar"
import Profilebox from "../components/Settings/Profilebox"
import SettingsOptions from "../components/Settings/SettingsOptions"

const Settings = () => {
    return (
        <section className="settingsview">
            <Navbar />
            <Profilebox />
            <SettingsOptions />
        </section>
    )
}

export default Settings