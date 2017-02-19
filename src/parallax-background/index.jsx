import React, { Component, PropTypes } from 'react';

function calculateTranslation(value, el) {
  return (window.scrollY / value > 0) ? ((window.scrollY - el.getBoundingClientRect().top) / value) : 0;
}

function calculateTranslationStyle(scrollDirection, contentTranslationValue) {
  let style;

  switch (scrollDirection) {
    case 'up':
      style = `translate3d(0px, ${-contentTranslationValue}px, 0px)`;
      break;
    case 'left':
      style = `translate3d(${-contentTranslationValue}px, 0px, 0px)`;
      break;
    case 'right':
      style = `translate3d(${contentTranslationValue}px, 0px, 0px)`;
      break;
    default: // down
      style = `translate3d(0px, ${contentTranslationValue}px, 0px)`;
      break;
  }

  return style;
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
      contentSpeedDivision: props.contentSpeedDivision || 4,
      scrollDirection: props.scrollDirection || 'up',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcTranslation.bind(this), 10);
  }

  componenetWillUnmount() {
    window.removeEventListener('scroll', this.calcTranslation);
  }

  calcTranslation() {
    if (this.content && isScrolledIntoView(this.content)) {
      const contentTranslationValue = calculateTranslation(this.state.contentSpeedDivision, this.content);
      const contentTranslationStyle = calculateTranslationStyle(this.props.scrollDirection, contentTranslationValue);
      this.content.style.transform = contentTranslationStyle;
    }
  }

  render() {
    return (
      <div ref={div => { this.content = div; }}>
        {this.props.children}
      </div>
    );
  }
}

