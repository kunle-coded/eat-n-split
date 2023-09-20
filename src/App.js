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
  const [showAddFriends, setAddFreinds] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFreind() {
    setAddFreinds((prevState) => !prevState);
  }

  function handleNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddFreinds(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFreinds(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friends}
          onSelectFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriends && <AddFriend onAddFriend={handleNewFriend} />}
        <Button onClick={handleAddFreind}>
          {showAddFriends ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <Bill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
