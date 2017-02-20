import React, { Component, PropTypes } from 'react';

export default class ParallaxContainer extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  getDefaultProps() {
    return {
      movementStrength: 15,
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.movementStrength = this.props.movementStrength || 15;
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }


  handleMouseMove(e) {
    const movementStrength = this.movementStrength;
    const height = movementStrength / window.outerHeight;
    const width = movementStrength / window.outerWidth;
    const pageX = e.pageX - (window.outerWidth / 2);
    const pageY = e.pageY - (window.outerHeight / 2);
    const newvalueX = (width * (pageX * -1));
    const newvalueY = (height * (pageY * -1));
    this.mouseMoveParallaxLayer.style.transform = `translate3d(${newvalueX}px, ${newvalueY}px, 0px)`;
  }

  render() {

    return (
      <div ref={ref => { this.mouseMoveParallaxLayer = ref; }} onMouseMove={this.handleMouseMove}>

      </div>
    );
  }
}


