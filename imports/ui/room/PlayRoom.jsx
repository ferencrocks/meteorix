import { Meteor } from 'meteor/meteor';
import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Stage from '../tetris/Stage';

export default class PlayRoom extends Component
{
  static propTypes = {
    room: PropTypes.object,
    stage: PropTypes.object,
    gameState: PropTypes.object
  };

  render() {
    const room = this.props.room;
    return (
      <div>
        <Stage
          width={room && room.width}
          height={room && room.height}
          matrix={[
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', '_R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', '_G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', '_B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G'],
            ['R', 'G', 'Y', 'B', 'R', 'G', 'Y', 'B', 'Y', 'G']
          ]}
        />
      </div>
    );
  }
}