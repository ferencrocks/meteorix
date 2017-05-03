import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import { Rooms } from '../../api/collections/Rooms';

export default class CreateRoom extends Component
{
  static propTypes = {
    onCreateRoom: PropTypes.func.isRequired
  };

  handleCreate(evt) {
    evt.preventDefault();
    if (this.refs.form.checkValidity() && this.props.onCreateRoom) {
      this.props.onCreateRoom(this.refs.roomName);
    }
  }

  render() {
    return (
      <form ref="form">
        <div className="form-group">
          <label htmlFor="">Room name</label>
          <input type="text" className="form-control" ref="roomName" required />
        </div>

        <div className="form-group">
          <button className="btn btn-success" onClick={this.handleCreate.bind(this)}>Create</button>
        </div>
      </form>
    );
  }
}