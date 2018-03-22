import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

export class RoomStates {
  addRoom() {

  }

  removeRoom() {
    
  }
}

const rooms = [];

const room = {
  roomId: '123343534546',
  roomTimer: 12244,
  playerStates: [
    {
      userId: '1212324354646',
      shape: 'L',
      row: 2,
      col: 3,
      speed: 10,
      score: 2500
    }
  ]
};

if (Meteor.isServer) {
  let roomTimer;

  const findMyRoom = () => {
    const roomFound = rooms.filter(room => {
      return room.players.find(player => player.userId === Meteor.userId()) !== undefined;
    });
    return (roomFound.length === 1) && roomFound[0];
  };

  Meteor.publish('gameState', function(filter) {
    let room = rooms.find(room => room.roomId === filter.roomId);

    if (!room) {
      room = {
        roomId: filter.roomId,
        players: []
      };

      room.roomTimer = Meteor.setInterval(() => {

      }, 100);

      rooms.push(room);
    }


  });

  this.onStop = function() {
    Meteor.clearInterval(roomTimer);
  };
}