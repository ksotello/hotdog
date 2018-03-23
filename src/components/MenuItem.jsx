import React, { Component } from 'react';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { label } = this.props;

    return <a href="#">{label}</a>
  }

}
