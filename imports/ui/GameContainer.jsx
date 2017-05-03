import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class GameContainer extends Component
{
  static propTypes = {
    content: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  };

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

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, GameContainer);