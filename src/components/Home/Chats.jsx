import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import ChatIcon from '@mui/icons-material/Chat';

import Chatcard from "./widgets/Chatcard";

const Chats = () => {
  const [ChatListData] = useState([
    {
      cardImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      userName: 'Linda Schulz',
      timeStamp: '6:07 AM',
      messageContext: 'Good morning! 😉',
      unreadCount: 2
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      userName: 'Natasha Whitman',
      timeStamp: '7:01 AM',
      messageContext: 'We finished debugging...',
      unreadCount: 1
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      userName: 'Andy Jasy',
      timeStamp: '09:07 PM',
      messageContext: 'Code has been commited...',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      userName: '://The Code Gang',
      timeStamp: '09:16 PM',
      messageContext: 'Fred: Meetup today @1700hrs',
      unreadCount: 6,
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      userName: 'Mongoose Webber',
      timeStamp: '10:00 AM',
      messageContext: 'Free coupons from uber eats...',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      userName: 'Andrew BoozeMan',
      timeStamp: '10:23 AM',
      messageContext: 'Yo! Friday\'s coming up',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1623607915241-a3151d59a9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
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
      cardImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      userName: 'Susan Monaco',
      timeStamp: '11:35 AM',
      messageContext: 'Let\'s head out for lunch @1PM',
      unreadCount: 0,
    },
    {
      cardImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      userName: 'Sheila netz',
      timeStamp: '12:15 AM',
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