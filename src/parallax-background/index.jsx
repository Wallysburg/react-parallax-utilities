import React, { Component, PropTypes } from 'react';

function calculateTranslation(value, el) {
  return (window.scrollY / value > 0) ? ((window.scrollY - el.getBoundingClientRect().top) / value) : 0;
}

function isScrolledIntoView(el) {
  const elemTop = el.getBoundingClientRect().top;
  const elemBottom = el.getBoundingClientRect().bottom;

  return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

export default class ParallaxBackground extends Component {

  static propTypes = {
    contentSpeedDivision: PropTypes.number,
    children: PropTypes.node,
    scrollDirection: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      contentSpeedDivision: props.contentSpeedDivision || 13,
      scrollDirection: props.scrollDirection || 'up',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcTranslation.bind(this), 10);
  }

  componenetWillUnmount() {
    window.removeEventListener('scroll', this.calcTranslation.bind(this));
  }

  calcTranslation() {
    if (this.content && isScrolledIntoView(this.content)) {
      const currentWindowHeight = window.scrollY;
      const contentTranslationValue = calculateTranslation(this.state.contentSpeedDivision, this.content);
      const contentTranslationStyle = `translate3d(0px, ${contentTranslationValue}px, 0px)`;
      this.content.style.transform = contentTranslationStyle;
    }
  }

  render() {
    console.log(this.props.children);
    return (
      <div ref={div => { this.content = div; }}>
        {this.props.children}
      </div>
    );
  }
}

