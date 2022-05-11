import { useState } from 'react';
import MessageWidget from './MessageWidget';

const MessageList = () => {

    const [MessageList] = useState([
        {
            isRecipent: true,
            message: 'Good morning from jupiter?',
            timeStamp: '6:07 AM',
            isRead: true,
        },
        {
            isRecipent: false,
            message: 'Weeell! Hello from jupiter',
            timeStamp: '6:12 AM',
            isRead: true,
        },
        {
            isRecipent: true,
            message: 'Did you send the report?',
            timeStamp: '6:15 AM',
            isRead: true,
        },
        {
            isRecipent: false,
            message: 'Yes! I sent the report yesterday @2200hrs',
            timeStamp: '6:20 AM',
            isRead: true,
        },
        {
            isRecipent: false,
            message: 'Confirm if received...',
            timeStamp: '6:22 AM',
            isRead: true,
        },
        {
            isRecipent: true,
            message: 'Let me confirm...',
            timeStamp: '6:30 AM',
            isRead: true,
        },
        {
            isRecipent: false,
            message: 'Check on the primary tab..',
            timeStamp: '6:35 AM',
            isRead: true,
        },
        {
            isRecipent: true,
            message: 'Found it..',
            timeStamp: '6:40 AM',
            isRead: true,
        },
        {
            isRecipent: false,
            message: 'I\'m heading out to the office',
            timeStamp: '6:45 AM',
            isRead: true,
        },
        {
            isRecipent: true,
            message: 'A\'l be there shortly..',
            timeStamp: '6:50 AM',
            isRead: true,
        },
        {
            isRecipent: false,
            message: 'Cool!',
            timeStamp: '7:00 AM',
            isRead: true,
        }
    ])
    return (
        <section className="chatview__messagelist">
            <div className="chatview__messagelist__wrapper">
                {MessageList.map((message, index) => {
                    return (
                        <MessageWidget
                            key={index}
                            isRecipent={message.isRecipent}
                            message={message.message}
                            timeStamp={message.timeStamp}
                            isRead={message.isRead}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default MessageList