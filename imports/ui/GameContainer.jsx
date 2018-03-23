import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import { GameState } from '../api/collections/GameState';

import {
  KEYBOARD_UP,
  keyboardUp,
  KEYBOARD_DOWN,
  keyboardDown,
  KEYBOARD_LEFT,
  keyboardLeft,
  KEYBOARD_RIGHT,
  keyboardRight
} from './redux/keyboard/actions';
import connectMeteor from 'react-redux-meteor-data';

class GameContainer extends Component
{
  static propTypes = {
    content: PropTypes.object.isRequired,
    currentUser: PropTypes.object,
    dispatch: PropTypes.func,

    onArrowUp: PropTypes.func.isRequired,
    onArrowDown: PropTypes.func.isRequired,
    onArrowLeft: PropTypes.func.isRequired,
    onArrowRight: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', (evt) => {
      switch (evt.key) {
        case KEYBOARD_UP:
            this.props.onArrowUp();
          break;

        case KEYBOARD_DOWN:
            this.props.onArrowDown();
          break;

        case KEYBOARD_LEFT:
            this.props.onArrowLeft();
          break;

        case KEYBOARD_RIGHT:
            this.props.onArrowRight();
          break;
      }
    });
  }

  render() {
    return (
      <section id="game-container" className="container">
        {React.cloneElement(this.props.content, {
          currentUser: this.props.currentUser
        })}
      </section>
    );
  }
}

const mapTrackerToProps = () => {
  Meteor.subscribe('keyboardDDP');
  Meteor.subscribe('gameState');

  console.log(GameState.findOne());

  const user = Meteor.user();
  return {
    currentUser: user,
    gameState: GameState.findOne()
  }
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onArrowUp: () => dispatch(keyboardUp()),
  onArrowDown: () => dispatch(keyboardDown()),
  onArrowLeft: () => dispatch(keyboardLeft()),
  onArrowRight: () => dispatch(keyboardRight())
});

export default connectMeteor(
  mapTrackerToProps,
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);