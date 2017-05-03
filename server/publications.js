import { Meteor } from 'meteor/meteor';
import { Rooms } from '../imports/api/collections/Rooms';

Meteor.publish('rooms', function() {
  return Rooms.find();
});