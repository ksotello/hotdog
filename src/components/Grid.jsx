import React, { Component } from 'react';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="grid">
        {this.props.children}
      </section>
    )
  }

}
