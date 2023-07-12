import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList"
import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"

export const App = () => {
  return <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
      likes={user.stats.likes} />
    
    <Statistics
      title={data.title}
      stats={data}
    />

    <FriendList
      friends={friends}
    />
   
  </div>
};


