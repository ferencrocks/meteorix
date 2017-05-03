import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Rooms } from '../../api/collections/Rooms';
import RoomList from './RoomList';
import CreateRoom from './CreateRoom';

class Lobby extends Component
{
  static propTypes = {
    currentUser: PropTypes.object,
    rooms: PropTypes.array,
    myStartedRooms: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      createFormShown: false
    };
  }

  componentWillReceiveProps(props) {
    if (props.myStartedRooms) {
      if (props.myStartedRooms.length > 0) {
        // A new room has been started
        FlowRouter.go('room', {roomId: props.myStartedRooms[0]._id});
      }
    }
  }

  handleCreateRoomDisplay() {
    this.setState({ createFormShown: !this.state.createFormShown });
  }

  handleCreateRoom(roomName) {
    Rooms.insert({
      name: roomName.value,
      users: [this.props.currentUser],
      creator: this.props.currentUser._id,
      isOpen: true,
      isStarted: false,

      // Some default values now...
      width: 10,
      height: 20
    });
  }

  handleJoinRoom(room) {
    Rooms.update(
      {_id: room._id},
      {
        $push: {
          users: this.props.currentUser
        }
      }
    );
  }

  handleStartRoom(room) {
    Rooms.update(
      {_id: room._id},
      {
        $set: { isStarted: true}
      }
    );
  }

  renderCreateRoom() {
    if (!this.props.currentUser) return null;
    return (
      <div>
        <button className="btn btn-default" onClick={this.handleCreateRoomDisplay.bind(this)}>Create room</button>
        {this.state.createFormShown && <CreateRoom onCreateRoom={this.handleCreateRoom.bind(this)}/>}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Meteorix lobby</h1>

        {this.renderCreateRoom()}

        <h2>All rooms</h2>
        <div className="row">
          <RoomList
            rooms={this.props.rooms}
            currentUser={this.props.currentUser}
            onJoinRoom={room => this.handleJoinRoom(room)}
            onStartRoom={room => this.handleStartRoom(room)}
          />
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('rooms');

  const userId = Meteor.userId();
  const myStartedRooms = Rooms.find({
    'users._id': userId,
    'isStarted': true
  }).fetch();

  return {
    rooms: Rooms.find({ isOpen: true }).fetch(),
    myStartedRooms: myStartedRooms
  };
}, Lobby);