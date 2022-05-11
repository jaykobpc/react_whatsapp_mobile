import QrCodeIcon from '@mui/icons-material/QrCode';

const Profilebox = () => {
    return (
        <section className="settingsview__profilebox">
            <div className="settingsview__profilebox__imagebox">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" draggable="false" alt="" className="settingsview__profilebox__imagebox__img" />
            </div>
            <div className="settingsview__profilebox__textview">
                <h3 className="settingsview__profilebox__textview__title">Jaykob W</h3>
                <p className="settingsview__profilebox__textview__smtitle">Hey there I'm using Whatsapp</p>
            </div>
            <div className="settingsview__profilebox__iconbox">
                <QrCodeIcon />
            </div>
        </section>
    )
}

export default Profilebox