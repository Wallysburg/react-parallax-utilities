import React, { Component, PropTypes } from 'react';

export default class ParallaxContainer extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    const event = e || window.event;

    const x = event.clientX - this.parallaxBox.offSetLeft;
    const y = event.clientY - this.parallaxBox.offSetTop;

    

  }

  render() {

    return (
      <div ref={ref => { this.parallaxBox = ref; }} onMouseMove={this.handleMouseMove}>
        { this.props.children }
      </div>
    );
  }
}


