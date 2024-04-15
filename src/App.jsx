import Profile from "./components/Profile/Profile"
import FriendList from ""
import TransactionHistory from ""
import userData from "./userData.json"
import friends from "./friends.json"
import transactions from "./transaction.json"

export default function App() {
  return (<>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>)
}
