import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Stages = new Meteor.Collection('stages');
Stages.attachSchema(new SimpleSchema({
  width: { type: Number },
  height: { type: Number },
  matrix: { type: Array },
  'matrix.$': { type: Array },
  'matrix.$.$': { type: Number },
}));

