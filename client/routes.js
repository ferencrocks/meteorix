import React from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount as _mount, withOptions } from 'react-mounter';
const mount = withOptions({ rootId: 'meteorix-root' }, _mount);

import GameContainer from '../imports/ui/GameContainer';
import Lobby from '../imports/ui/lobby/Lobby';
import SignIn from '../imports/ui/SignIn';
import PlayRoom from '../imports/ui/room/PlayRoom';

FlowRouter.route('/', {
  name: 'lobby',
  action() {
    mount(GameContainer, {content: <Lobby />})
  }
});

FlowRouter.route('/signin', {
  name: 'signIn',
  action() {
    mount(GameContainer, {content: <SignIn />})
  }
});

FlowRouter.route('/room/:roomId', {
  name: 'room',
  action(params) {
    if (params.roomId) {
      mount(GameContainer, {content: <PlayRoom roomId={params.roomId}/>});
    }
    else {
      // #todo: some 404 here
    }
  }
});