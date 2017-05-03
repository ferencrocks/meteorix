import React from 'react';

export default RoomListItem = ({ room, canIJoin, iAmCreator, onJoinRoom, onStartRoom }) => {
  return (
    <li className="list-group-item clearfix">
      <div className="col-xs-9">
        <strong>{room.name}</strong>
        <p>
          {room.users.length} players
        </p>
      </div>
      <div className="col-xs-3">
        {canIJoin &&
          <button
            className="btn btn-default"
            onClick={() => onJoinRoom(room)}>
            Join
          </button>
        }
        {!canIJoin && <button className="btn btn-default" disabled>Joined</button>}
        {iAmCreator &&
          <button
            className="btn btn-warning"
            onClick={() => onStartRoom(room)}>
            Start game
          </button>
        }
      </div>
    </li>
  );
};