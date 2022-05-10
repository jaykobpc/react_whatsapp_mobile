import { useState } from "react"
import Statuscard from "./widgets/Statuscard"

const Status = () => {
  const [statusList] = useState([
    {
      statusImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      pendingStatus: 1,
      statusUser: 'Natasha webber',
      statusTimeStamp: '3 minutes ago',
      isOwner: 0,
    },
    {
      statusImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      pendingStatus: 1,
      statusUser: 'Natasha webber',
      statusTimeStamp: '3 minutes ago',
      isOwner: 0,
    },
    {
      statusImage: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      pendingStatus: 0,
      statusUser: 'Natasha webber',
      statusTimeStamp: '3 minutes ago',
      isOwner: 0,
    },
  ]);

  return (
    <section className="homeview__chatlist">
      <Statuscard
        statusImage="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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

    </section>
  )
}

export default Status