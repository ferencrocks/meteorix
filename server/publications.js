import { Meteor } from 'meteor/meteor';
import { Keyboard } from '../imports/api/collections/Keyboard';
import { Rooms } from '../imports/api/collections/Rooms';
import { GameState } from '../imports/api/collections/GameState';

Meteor.publish('rooms', function() {
  return Rooms.find();
});