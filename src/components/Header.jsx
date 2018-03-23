import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.getHeaderSize.bind(this);
  }

  getHeaderSize(size, text) {
    if (size === 'large') {
      return <h1>{text}</h1>
    }

    return <h3>{text}</h3>
  }

  render() {
    const { size, text } = this.props;

    return this.getHeaderSize(size, text);
  }

}
