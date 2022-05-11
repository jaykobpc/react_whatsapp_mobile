import { useState } from "react"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import Statuscard from "./widgets/Statuscard"

const Status = () => {
  const [statusList] = useState([
    {
      statusImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      pendingStatus: 1,
      statusUser: 'Linda Schulz',
      statusTimeStamp: 'Just now',
      isOwner: 0,
    },
    {
      statusImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      pendingStatus: 1,
      statusUser: 'Natasha Whitman',
      statusTimeStamp: '5 minutes ago',
      isOwner: 0,
    },
    {
      statusImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      pendingStatus: 0,
      statusUser: 'Mongoose webber',
      statusTimeStamp: '20 minutes ago',
      isOwner: 0,
    },
  ]);

  return (
    <section className="homeview__chatlist">
      <Statuscard
        statusImage="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        pendingStatus={0}
        statusUser='My Status'
        statusTimeStamp='Tap to add status update'
        isOwner={1}
      />
      <div className="homeview__chatlist__group">
        <h3 className="homeview__chatlist__group__title">Recent Updates</h3>
        {statusList.map((status, index) => {
          return (
            <Statuscard
              key={index}
              statusImage={status.statusImage}
              pendingStatus={status.pendingStatus}
              statusUser={status.statusUser}
              statusTimeStamp={status.statusTimeStamp}
              isOwner={status.isOwner}
            />
          )
        })}
      </div>

      <button className="homeview__fabedit">
        <EditIcon />
      </button>
      <button className="homeview__fabutton">
        <CameraAltIcon />
      </button>

    </section>
  )
}

export default Status