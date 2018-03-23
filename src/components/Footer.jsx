import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { copyWrite, address, phone, contact } = this.props;

    return(
      <section className="footer">
        <span>{copyWrite}</span>
        <ul>
          <li>{address}</li>
          <li>{phone}</li>
          <li>{contact}</li>
        </ul>
      </section>
    );
  }

}
