import { useState } from "react"
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Callscard from "./widgets/Callscard";

const Calls = () => {
  const [callListData] = useState([
    {
      callerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      callerName: 'Linda Schulz',
      callAccepted: 1,
      callDate: 'Just Now',
      callType: 1,
    },
    {
      callerImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      callerName: 'Mongoose Webber',
      callAccepted: 0,
      callDate: '5 minutes ago',
      callType: 0,
    },
    {
      callerImage: 'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      callerName: 'Andrew Boozeman',
      callAccepted: 1,
      callDate: 'Yesterday 18:25 PM',
      callType: 1,
    },
  ]);

  return (
    <section className="homeview__chatlist">
      {callListData.map((call, index) => {
        return (
          <Callscard
            key={index}
            callerImage={call.callerImage}
            callerName={call.callerName}
            callAccepted={call.callAccepted}
            callDate={call.callDate}
            callType={call.callType}
          />
        )
      })}

      <button className="homeview__fabutton">
        <AddIcCallIcon />
      </button>
    </section>
  )
}

export default Calls