import React, { Component, PropTypes } from 'react';

export default class ParallaxGroup extends Component {


  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const parallaxGroupStyle = {
      position: 'relative',
      height: this.props.height,
      'transform-style': 'preserve-3d',
    };

    return (
      <div style={parallaxGroupStyle}>
        { this.props.children }
      </div>
    );
  }
}
