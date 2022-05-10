import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import ChatIcon from '@mui/icons-material/Chat';

import Chatcard from "./widgets/Chatcard";

const Chats = () => {
  const [ChatListData] = useState([
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Linda Schulz',
      timeStamp: '6:07 AM',
      messageContext: 'Good morning! 😉',
      unreadCount: 2
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Natasha Whitman',
      timeStamp: '7:01 AM',
      messageContext: 'We finished debugging...',
      unreadCount: 1
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Andy Jasy',
      timeStamp: '9:07 AM',
      messageContext: 'Hello world!',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: '://The Code Gang',
      timeStamp: '9:16 AM',
      messageContext: 'Fred: Meetup today @1700hrs',
      unreadCount: 6,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Natasha Webber 😉',
      timeStamp: '10:00 AM',
      messageContext: 'Free coupons from uber eats...',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Andrew BoozeMan',
      timeStamp: '10:23 AM',
      messageContext: 'Yo! Friday\'s coming up',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Champions League',
      timeStamp: '10:35 AM',
      messageContext: 'All games over the weekend...',
      unreadCount: 8,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Fawaz Anwar',
      timeStamp: '11:35 AM',
      messageContext: 'There will be no deliveries friday.',
      unreadCount: 1,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Susan Monaco',
      timeStamp: '11:35 AM',
      messageContext: 'Let\'s head out for lunch @1PM',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      userName: 'Sheila netz',
      timeStamp: '12:15 PM',
      messageContext: 'My code isn\'t working...',
      unreadCount: 0,
    },
  ]);

  const navigate = useNavigate();

  const toContacts = () => {
    navigate('/contacts');
  }

  return (
    <section className="homeview__chatlist">
      {ChatListData.map((chatdata, index) => {
        return (
          <Chatcard
            key={index}
            cardImage={chatdata.cardImage}
            userName={chatdata.userName}
            timeStamp={chatdata.timeStamp}
            messageContext={chatdata.messageContext}
            unreadCount={chatdata.unreadCount}
          />
        )
      })}

      <button onClick={() => toContacts()} className="homeview__fabutton">
        <ChatIcon />
      </button>
    </section>
  )
}

export default Chats