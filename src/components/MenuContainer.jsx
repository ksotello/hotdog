import React, { Component } from 'react';
import { MenuItem } from '.';

export default class MenuContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        {
          id: 1, label: 'Menu'
        },
        {
          id: 2, label: 'Catering'
        },
        {
          id: 3, label: 'About Us'
        },
        {
          id: 4, label: 'Contact'
        }
      ]
    };
  }

  render() {
    const { menuItems } = this.state;

    return(
      <section className="menu-container">
        <nav>
          {menuItems.map((menuItem) => { return <MenuItem key={menuItem.id} label={menuItem.label} /> })}
        </nav>
      </section>
    );
  }

}
