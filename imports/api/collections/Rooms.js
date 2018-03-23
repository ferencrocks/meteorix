import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Stages } from './Stages';

export const Rooms = new Meteor.Collection('rooms');
Rooms.attachSchema(new SimpleSchema({
  name: {type: String},
  stageId: {type: String},

  users: {type: Array},
  'users.$': {type: Object, blackbox: true},
  creator: {type: String},

  isOpen: {type: Boolean},
  isStarted: {type: Boolean}
}));

Rooms.helpers({
  getStage() {
    return Stages.findOne({ _id: this.stageId });
  }
});

if (Meteor.isServer) {
  export function findRoomOfUser(userId) {
    return Rooms.findOne({
      'users': { $elemMatch: {_id: userId} }
    });
  }

  Rooms.allow({
    insert: (userId, room) => {
      return userId; // logged in users can create rooms
    },

    update: (userId, room, fieldNames, modifiers) => {
      return !!userId;

      // Only the creator can start a room. Server side security :)
      const isCreator = room.creator === userId;
      // #todo: Debug room creation security
      //
      // if (fieldNames.indexOf('users') > -1 && ) {
      //   if (!room.isStarted && modifiers.users.['$set']['isStarted'] === true && !isCreator) return false;
      //   return true;
      // }
    }
  });
}