import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { Rooms, findRoomOfUser } from './Rooms';
import { RED } from '../../colors';
import { SHAPE_O, ALL_SHAPES } from '../../shapes';

export const GameState = new Meteor.Collection('gameStateCollection');


class RoomState {
  _room;
  _stage;
  _timer;
  _playerStates = {};
  _stageMatrix;

  constructor(room) {
    this._room = room;
    this._stage = room.getStage();
    this._stageMatrix = this._initStageStateMatrix();
  }

  addPlayer(userId) {
    if (this._playerStates[userId]) return;
    // if (this._room.isStarted) {
    //   throw new Error('Cannot join room when it\'s already started');
    // }

    this._playerStates[userId] = new PlayerState(userId, RED);
  }

  getPlayerState(userId) {
    return this._playerStates[userId];
  }

  serialize() {
    const serializePlayers = () => {
      const playerStates = {};
      Object.keys(this._playerStates).forEach(userId => {
        playerStates[userId] = this._playerStates[userId].serialize();
      });
      return playerStates;
    };

    return {
      roomId: this._room.roomId,
      playerStates: serializePlayers(),
      stageMatrix: this._stageMatrix
    };
  }

  startRoomLoop(callback) {
    this._timer = Meteor.setInterval(callback, 100);
  }

  endRoomLoop() {
    Meteor.clearInterval(this._timer);
  }

  _initStageStateMatrix() {
    const matrix = [];
    for (let r = 0; r < this._stage.height; r++) {
      matrix.push([]);
      for (let c = 0; c < this._stage.width; c++) {
        matrix[r][c] = 0;
      }
    }
    return matrix;
  }
}

class PlayerState {
  shape;
  shapeAngle;
  shapeRow = 0;
  shapeCol = 0;
  color;
  score = 0;
  userId;

  constructor(userId, color) {
    this.userId = userId;
    this.color = color;
    this.newRandomShape();
  }

  posToLeft() {

  }

  posToRight() {

  }

  rotateShape() {

  }

  newRandomShape() {
    this.shape = SHAPE_O;
    this.shapeAngle = 0;
    this.shapeRow = 0;
    this.shapeCol = 0;
  }

  serialize() {
    return {
      shape: this.shape,
      row: this.shapeRow,
      col: this.shapeCol,
      score: this.score
    };
  }
}

if (Meteor.isServer) {
  const rooms = {};

  Meteor.publish('gameState', function() {
    // const fakeRoomId = Random.id();
    // // const userRoom = findRoomOfUser(this.userId);
    //
    // // let roomState = rooms[userRoom._id];
    // // if (!roomState) {
    // //   console.log('Creating roomState');
    // //   roomState = rooms[userRoom._id] = new RoomState(userRoom);
    // // }
    //
    // this.added('gameStateCollection', fakeRoomId, {babuci: "kaak"});
    // this.ready();
    //
    // Meteor.setInterval(() => {
    //   console.log(fakeRoomId);
    //   this.added('gameStateCollection', fakeRoomId, {tick: Math.random()})
    // }, 500);

    // const fakeRoomId = Random.id();
    //
    // this.added('gameStateCollection', fakeRoomId, {tick: Math.random()});
    // this.ready();
    //
    // Meteor.setInterval(() => {
    //   this.changed('gameStateCollection', fakeRoomId, {tick: Math.random()});
    // }, 500);


    //
    // this.onStop = () => roomState.endRoomLoop();
  });
}