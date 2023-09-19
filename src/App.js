import React, { useState } from "react";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Bill from "./components/Bill";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friendList={friends} />
        <AddFriend />
        <Button>Add friend</Button>
      </div>
      <Bill />
    </div>
  );
}

export default App;
