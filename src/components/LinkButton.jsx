import React, { Component } from 'react';

export default class LinkButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { linkText, link } = this.props;
    
    return <a href={link}>{linkText}</a>
  }

}
