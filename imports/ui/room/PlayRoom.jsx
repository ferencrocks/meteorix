import { Meteor } from 'meteor/meteor';
import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Rooms } from '../../api/collections/Rooms';
import Stage from '../tetris/Stage';

export class PlayRoom extends Component
{
  static propTypes = {
    room: PropTypes.object
  };

  componentWillMount() {
    document.addEventListener('keydown', (evt) => {

    });
  }

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

export default PlayRoomReactive = createContainer(({ roomId }) => {
  Meteor.subscribe('rooms');

  return {
    room: Rooms.findOne(roomId)
  };
}, PlayRoom);