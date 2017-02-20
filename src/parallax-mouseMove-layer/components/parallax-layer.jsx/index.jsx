import React, { Component, PropTypes } from 'react';

export default class ParallaxLayer extends Component {

  static propTypes = {
    children: PropTypes.node,
    mouseParallax: PropTypes.function,
  };

  constructor(props) {
    super(props);
    this.offSetTop = this.parallaxLayer.offSetTop;
    this.offSetLet = this.parallaxLayer.offSetLet;
  }

  render() {
    return (
      <div ref={ref => { this.parallaxLayer = ref; }}>
      </div>
    );
  }
}

