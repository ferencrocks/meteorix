import React from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount as _mount, withOptions } from 'react-mounter';
const mount = withOptions({ rootId: 'meteorix-root' }, _mount);

import GameContainer from '../imports/ui/GameContainer';
import Lobby from '../imports/ui/lobby/Lobby';
import SignIn from '../imports/ui/SignIn';
import PlayRoom from '../imports/ui/room/PlayRoom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../imports/ui/redux/reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const GameContainerWithStore = (props) =>
  <Provider store={store}>
    <GameContainer {...props} />
  </Provider>;

FlowRouter.route('/', {
  name: 'lobby',
  action() {
    mount(GameContainerWithStore, {content: <Lobby />})
  }
});

FlowRouter.route('/signin', {
  name: 'signIn',
  action() {
    mount(GameContainerWithStore, {content: <SignIn />})
  }
});

FlowRouter.route('/room/:roomId', {
  name: 'room',
  action(params) {
    if (params.roomId) {
      mount(GameContainerWithStore, {content: <PlayRoom roomId={params.roomId}/>});
    }
    else {
      // #todo: some 404 here
    }
  }
});