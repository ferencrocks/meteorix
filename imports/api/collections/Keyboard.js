import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

export const Keyboard = new Meteor.Collection('keyboard');

if (Meteor.isServer) {
  Meteor.publish('keyboardDDP', function () {
    const _this = this;

    const keyboardHandler = Keyboard.find({}).observeChanges({
      added: function (id, data) {
        console.log(data);
        //_this.changed("keyboard", id, fields);
      }
    });

    this.ready();
    this.onStop(() => keyboardHandler.stop());
  });

  Keyboard.allow({
    insert() { return true }
  });
  Keyboard.deny({
    update() { return true },
    remove() { return true }
  });
}