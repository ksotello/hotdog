import React, { Component } from 'react';

export default class GridSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="grid-section">
        {this.props.children}
      </div>
    )
  }

}
