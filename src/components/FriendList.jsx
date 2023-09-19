import React from "react";
import Friend from "./Friend";

function FriendList({ friendList }) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendList;
