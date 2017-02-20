import React, { Component, PropTypes } from 'react';

function calcScale(perspective, transform) {
  return ((1 + (transform * -1)) / perspective);
}

export default class ParallaxScrollLayer extends Component {


  static propTypes = {
    children: PropTypes.node,
    transform: PropTypes.number,
    parentPerspective: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
    this.parentPerspective = this.props.parentPerspective || 1;
    this.transform = this.props.transform || -2;
  }

  render() {
    const scale = calcScale(this.parentPerspective, this.transform);
    const parallaxLayerStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transform: `translateZ(${this.transform}px) scale(${scale})`,
    };

    return (
      <div style={parallaxLayerStyle}>
        { this.props.children }
      </div>
    );
  }
}


