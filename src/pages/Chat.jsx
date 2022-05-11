import Navbar from "../components/Chat/Navbar";
import MessageList from "../components/Chat/MessageList";
import MessageBox from "../components/Chat/MessageBox";

const Chat = () => {
  return (
    <section className="chatview">
      <div className="chatview__imagebox"></div>
      <div className="chatview__wrapper">
        <Navbar />
        <MessageList />
        <MessageBox />
      </div>
    </section>
  )
}

export default Chat