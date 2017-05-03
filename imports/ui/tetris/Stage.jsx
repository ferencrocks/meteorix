import React, { PropTypes, Component } from 'react';

import Cube from '../tetris/Cube';

const STAGE_MARGIN_FRACTION = 0.01;
const CUBE_MARGIN = 2;

export default class Stage extends Component
{
  static propTypes = {
    matrix: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number
  };
  static defaultProps = {
    width: 15,
    height: 30
  };

  constructor(props) {
    super(props);

    this.state = {
      winWidth: 0,
      winHeight: 0,

      cubeSize: 0
    };
  }

  componentDidMount() {
    const updateWinDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cubeSize = (h - (h * STAGE_MARGIN_FRACTION)) / this.props.height - CUBE_MARGIN;

      this.setState({
        winWidth: w,
        winHeight: h,
        cubeSize
      });
    };
    updateWinDimensions();
    window.addEventListener('resize', () => updateWinDimensions());
  }

  renderCubes() {
    const cubes = [];
    this.props.matrix.forEach((row, rowIdx) => {
      row.forEach((color, colIdx) => {
        cubes.push(
          <Cube
            key={'cube_' + rowIdx + '_' + colIdx}
            size={this.state.cubeSize}
            color={color}
            top={rowIdx * this.state.cubeSize + CUBE_MARGIN * rowIdx}
            left={colIdx * this.state.cubeSize + CUBE_MARGIN * colIdx}
          />
        );
      })
    });
    return cubes;
  }

  render() {
    const stageWidth = this.state.cubeSize * this.props.width + CUBE_MARGIN * this.props.width;
    const stageHeight = this.state.cubeSize * this.props.height + CUBE_MARGIN * this.props.height;

    return (
      <section id="stage" style={{width: stageWidth + 'px', height: stageHeight + 'px'}}>
        {this.renderCubes()}
      </section>
    );
  }
}