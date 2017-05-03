import React from 'react';
import RoomListItem from './RoomListItem';


const amIUserOfRoom = (userId, room) => {
  return room.users.filter(user => user._id === userId).length > 0;
};

export default RoomList = ({ rooms, currentUser, onJoinRoom, onStartRoom }) => {
  return (
    <div>
      <ul className="list-group">
        {rooms.map(room => {
          const iAmCreator = currentUser._id === room.creator;
          const canIJoin = !amIUserOfRoom(currentUser._id, room);

          return (
            <RoomListItem
              key={room._id}
              room={room}
              iAmCreator={iAmCreator}
              canIJoin={canIJoin}
              onJoinRoom={onJoinRoom}
              onStartRoom={onStartRoom}
            />
          );

        })}
      </ul>
    </div>
  );
};