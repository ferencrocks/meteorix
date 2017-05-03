import React, { PropTypes, Component } from 'react';

export default class Shape extends Component
{
  static propTypes = {
    matrix: PropTypes.array,
    color: PropTypes.string
  };

  render() {
    this.props.matrix.map((row, rowIdx) => row.map((col, colIdx) => {

    }));
  }
}